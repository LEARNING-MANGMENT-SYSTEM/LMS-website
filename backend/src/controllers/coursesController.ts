import { Request, Response } from 'express';
import * as service from '../services/courseService.js';
import { createCourseSchema, updateCourseSchema } from '../utils/validators.js';

export const createCourse = async (req: Request, res: Response) => {
  const parsed = createCourseSchema.safeParse(req.body);
  if (!parsed.success) return res.status(400).json({ error: 'Validation failed', issues: parsed.error.format() });

  try {
    const course = await service.createCourse(parsed.data);
    res.status(201).json(course);
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
};

export const listCourses = async (req: Request, res: Response) => {
  try {
    const result = await service.listCourses(req.query);
    res.json(result);
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
};

export const getCourse = async (req: Request, res: Response) => {
  try {
    const course = await service.getCourseByIdOrSlug(req.params.id);
    res.json(course);
  } catch (err: any) {
    res.status(404).json({ error: err.message });
  }
};

export const updateCourse = async (req: Request, res: Response) => {
  const parsed = updateCourseSchema.safeParse(req.body);
  if (!parsed.success) return res.status(400).json({ error: 'Validation failed', issues: parsed.error.format() });

  try {
    const course = await service.updateCourse(Number(req.params.id), parsed.data);
    res.json(course);
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
};

export const deleteCourse = async (req: Request, res: Response) => {
  try {
    const result = await service.deleteCourse(Number(req.params.id));
    res.json(result);
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
};
