import { supabase } from "../utils/supabaseClient.js";

export async function addOrUpdateRating(payload: any) {
  const { data, error } = await supabase
    .from('course_ratings')
    .upsert(payload, { onConflict: 'user_id,course_id' })
    .select('*');
  if (error) throw error;

  // If trigger update_course_stats is missing, recalc manually
  await recalcCourseStats(payload.course_id);

  return data;
}

export async function getRatingsForCourse(course_id: number) {
  const { data, error } = await supabase
    .from('course_ratings')
    .select('*')
    .eq('course_id', course_id)
    .order('created_at', { ascending: false });
  if (error) throw error;
  return data;
}

async function recalcCourseStats(course_id: number) {
  const { data, error } = await supabase
    .from('course_ratings')
    .select('rating')
    .eq('course_id', course_id);

  if (error) return;

  const ratings = (data || []).map((r: any) => r.rating);
  const total_ratings = ratings.length;
  const avg_rating = total_ratings ? Number((ratings.reduce((a, b) => a + b, 0) / total_ratings).toFixed(1)) : 0;

  await supabase.from('courses').update({ avg_rating, total_ratings }).eq('id', course_id);
}
