import { Course } from "../types/course.js";
import { parsePaging } from "../utils/paging.js";
import { supabase } from "../utils/supabaseClient.js";

export async function createCourse(data: Partial<Course>) {
  const { data: course, error } = await supabase
    .from("courses")
    .insert([data])
    .select("*")
    .single();
  if (error) throw error;
  return course;
}

export async function listCourses(query: any) {
  const { from, perPage } = parsePaging(query);
  const q = supabase
    .from("courses")
    .select("*", { count: "exact" })
    .range(from, from + perPage - 1);

  if (query.search) {
    q.ilike("title", `%${String(query.search)}%`);
  }
  if (query.category_id) {
    const categoryId = Number(query.category_id);
    const { data, error } = await supabase
      .from("course_categories")
      .select("course_id")
      .eq("category_id", categoryId);
    if (error) throw error;
    const courseIds = (data || []).map((r: any) => r.course_id);
    q.in("id", courseIds.length ? courseIds : [-1]);
  }

  const { data, error, count } = await q.order("created_at", {
    ascending: false,
  });
  if (error) throw error;
  return { data, count, page: Number(query.page || 1) };
}

export async function getCourseByIdOrSlug(identifier: string) {
  let course;
  if (Number.isInteger(Number(identifier))) {
    const { data, error } = await supabase
      .from("courses")
      .select("*")
      .eq("id", Number(identifier))
      .single();
    if (error) throw error;
    course = data;
  } else {
    const { data, error } = await supabase
      .from("courses")
      .select("*")
      .eq("slug", identifier)
      .single();
    if (error) throw error;
    course = data;
  }

  const { data: sections } = await supabase
    .from("sections")
    .select(`*, lectures:lectures(*)`)
    .eq("course_id", course.id)
    .order("sort_order", { foreignTable: "sections" });

  return { ...course, sections: sections || [] };
}

export async function updateCourse(id: number, updates: Partial<Course>) {
  const { data, error } = await supabase
    .from("courses")
    .update(updates)
    .eq("id", id)
    .select("*")
    .single();
  if (error) throw error;
  return data;
}

export async function deleteCourse(id: number) {
  const { error } = await supabase.from("courses").delete().eq("id", id);
  if (error) throw error;
  return { success: true };
}
