import { Request, Response } from 'express';
import * as service from '../services/ratingService.js';
import { createRatingSchema } from '../utils/validators.js';

export const addOrUpdateRating = async (req: Request, res: Response) => {
  const parsed = createRatingSchema.safeParse(req.body);
  if (!parsed.success) return res.status(400).json({ error: 'Validation failed', issues: parsed.error.format() });

  try {
    const data = await service.addOrUpdateRating(parsed.data);
    res.json(data);
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
};

export const getRatingsForCourse = async (req: Request, res: Response) => {
  try {
    const data = await service.getRatingsForCourse(Number(req.params.course_id));
    res.json(data);
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
};
