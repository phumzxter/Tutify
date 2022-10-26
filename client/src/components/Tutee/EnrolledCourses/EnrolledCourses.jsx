import React from 'react';
import EnrolledCourse from './EnrolledCourse/EnrolledCourse';
import { fetchTutorCourses } from '../../../api/index';
import { Grid, Typography, CircularProgress } from '@mui/material';

function EnrolledCourses(props) {
  let user = JSON.parse(localStorage.getItem('user'));
  const [courses, setCourses] = React.useState([]);

  fetchTutorCourses().then((result) => {
    setCourses(result);
  });

  return !courses.length ? (
    <CircularProgress />
  ) : (
    <Grid container alignItems="stretch" spacing={3}>
      {courses.map(
        (singleCourse) =>
          singleCourse?.tutees.includes(user.result._id) && (
            <Grid key={singleCourse._id} item xs={12} sm={6} md={6}>
              <EnrolledCourse chatChange={props.chatChange} course={singleCourse} />
            </Grid>
          )
      )}
    </Grid>
  );
}

export default EnrolledCourses;
