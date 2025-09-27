import express from 'express';
import * as ctrl from '../controllers/coursesController.js'

const router = express.Router();

router.post('/', ctrl.createCourse);
router.get('/', ctrl.listCourses);
router.get('/:id', ctrl.getCourse);
router.patch('/:id', ctrl.updateCourse);
router.delete('/:id', ctrl.deleteCourse);

export default router;
