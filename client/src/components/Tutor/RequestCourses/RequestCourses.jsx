import React, { useState, useEffect } from "react";
import RequestCourse from "./RequestCourse/RequestCourse";
import { fetchRequestedCourses } from "../../../api/index";
import { Grid, CircularProgress, TextField } from "@mui/material";

function RequestCourses(props) {
  let user = JSON.parse(localStorage.getItem("user"));
  const [courses, setCourses] = React.useState([]);
  const [searchvalue, setsearchvalue] = useState("");

  fetchRequestedCourses()
    .then(result => {
      setCourses(result);
      // console.log('courses', courses);
    })
    .catch(error => {
      if (error.response) {
        // console.log(error.response.data); // => the response payload
        alert(error.response.data.message);
      }
    });

  // console.log("userid", user.result._id)
  // console.log(courses[0].tutee)
  return !courses.length
    ? <CircularProgress />
    : <Grid container alignItems="stretch" spacing={3}>
        {/* <SearchBar
          value={searchvalue}
          onChange={e => setsearchvalue(e.target.value)}
        /> */}
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <TextField
          value={searchvalue}
          onChange={e => setsearchvalue(e.target.value)}
          placeholder="Enter Course Name"
          style = {{width: 440}}
        />
        {courses
          .filter(val => {
            //console.log(val.course);
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
              <RequestCourse course={singleCourse} />
            </Grid>
          )}
      </Grid>;
}

export default RequestCourses;
