import express from 'express';
import * as ctrl from '../controllers/ratingsController.js';

const router = express.Router();

router.post('/', ctrl.addOrUpdateRating);
router.get('/course/:course_id', ctrl.getRatingsForCourse);

export default router;
