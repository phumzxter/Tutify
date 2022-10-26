import React, { useState } from "react";
import AvailableCourse from "./AvailableCourse/AvailableCourse";
import { fetchTutorCourses } from "../../../api/index";
import { Grid, CircularProgress, TextField } from "@mui/material";

function AvailableCourses() {
  const [courses, setCourses] = React.useState([]);
  const [searchvalue, setsearchvalue] = useState("");

  fetchTutorCourses().then(result => {
    setCourses(result);
  });

  return !courses.length
  
    ? <CircularProgress />
    
    : <Grid container alignItems="stretch" spacing={3}>
      
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        
        <TextField
          value={searchvalue}
          onChange={e => setsearchvalue(e.target.value)}
          placeholder="Enter Course Name"
          style = {{width: 450}}
        />
        
        {courses
          .filter(val => {
            console.log(val.course);
            if (searchvalue == "") {
              return val;
            } else if (
              val.course.toLowerCase().includes(searchvalue.toLowerCase())
            ) {
              return val;
            }
          })
          .map(singleCourse =>
            <Grid key={singleCourse._id} item xs={12} sm={6} md={6}>
              <AvailableCourse course={singleCourse} />
            </Grid>
          )}
      </Grid>;
}

export default AvailableCourses;
