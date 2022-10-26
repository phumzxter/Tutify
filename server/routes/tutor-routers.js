import express from 'express';
import { getTeaching, getTutees, createCourse, logIn, signUp, deleteCourse } from '../routes-controllers/tutor-controller.js';

const router = express.Router();

router.get('/tutees', getTutees);
router.get('/teaching', getTeaching);
router.post('/teaching', createCourse);
router.post('/login', logIn);
router.post('/signup', signUp);
router.delete('/delete/:courseid', deleteCourse);

export default router;
