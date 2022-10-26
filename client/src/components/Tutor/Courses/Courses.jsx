import React from 'react';
import Course from './Course/Course';
import { fetchTutorCourses } from '../../../api/index';
import { Grid, Typography, CircularProgress } from '@mui/material';
import Axios from 'axios';

function Courses(props) {
  let user = JSON.parse(localStorage.getItem('user'));
  const [courses, setCourses] = React.useState([]);

  fetchTutorCourses().then((result) => {
    setCourses(result);
    // console.log("courses", courses);
  });

  return !courses.length ? (
    <CircularProgress />
  ) : (
    <Grid container alignItems="stretch" spacing={3}>
      {courses.map(
        (singleCourse) =>
          user.result._id === singleCourse?.tutor && (
            <Grid key={singleCourse._id} item xs={12} sm={6} md={6}>
              <Course viewChange={props.viewChange} course={singleCourse} />
            </Grid>
          )
      )}
    </Grid>
  );
}

export default Courses;
