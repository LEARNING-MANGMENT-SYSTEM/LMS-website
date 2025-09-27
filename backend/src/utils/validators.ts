import { z } from 'zod';

export const createCourseSchema = z.object({
  title: z.string().min(1),
  slug: z.string().min(1),
  subtitle: z.string().optional(),
  description: z.string().optional(),
  thumbnail_url: z.string().url().optional(),
  video_preview_url: z.string().url().optional(),
  price: z.number().optional(),
  original_price: z.number().optional(),
  currency: z.string().length(3).optional(),
  level: z.string().optional(),
  language: z.string().optional(),
  duration_hours: z.number().int().nonnegative().optional(),
  total_lectures: z.number().int().nonnegative().optional(),
  requirements: z.any().optional(),
  what_will_learn: z.any().optional(),
  target_audience: z.any().optional(),
  status: z.string().optional(),
  is_free: z.boolean().optional(),
  has_certificate: z.boolean().optional(),
  has_lifetime_access: z.boolean().optional(),
  has_mobile_access: z.boolean().optional()
});

export const updateCourseSchema = createCourseSchema.partial();

export const createRatingSchema = z.object({
  user_id: z.number().int(),
  course_id: z.number().int(),
  rating: z.number().int().min(1).max(5),
  review: z.string().optional(),
  is_featured: z.boolean().optional()
});
