import { TextField, Button, Paper, Typography } from '@mui/material';
import React from 'react';
import ComboBox from './Form_Components/allCoursesList';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Autocomplete from '@mui/material/Autocomplete';
import { allCoursesList } from './Form_Components/allCoursesList';
import { createCourse } from '../../../api/index';

function FormTeach() {
  let user = JSON.parse(localStorage.getItem('user'));
  const [courseData, setCourseData] = React.useState({
    course: '',
    availability: '',
    price: '',
    type: '',
    tutorname: user.result.name,
    tutor: user.result._id,
  });

  const clear = () => {
    //   setCurrentId(0);
    setCourseData({
      course: '',
      availability: '',
      price: '',
      type: '',
      tutorname: user.result.name,
      tutor: user.result._id,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    createCourse(courseData);
    clear();
  };

  return (
    <Paper elevation={3} sx={{ padding: 5, marginTop: 5 }}>
      <form onSubmit={handleSubmit}>
        <Typography sx={{ marginBottom: 3, minWidth: 200 }} variant="h4">
          Teach a Course
        </Typography>

        <Autocomplete
          sx={{ m: 1, minWidth: 300 }}
          disablePortal
          options={allCoursesList}
          renderInput={(params) => <TextField {...params} label="Course" />}
          // defaultValue={courseData.course}
          value={courseData.course}
          onChange={(event, value) => {
            setCourseData({ ...courseData, course: value });
          }}
          isOptionEqualToValue={(option, value) => option.value === value.value}
        />

        <FormControl sx={{ m: 1, minWidth: 200 }}>
          <InputLabel>Type</InputLabel>
          <Select value={courseData.type} onChange={(e) => setCourseData({ ...courseData, type: e.target.value })} label="Type">
            <MenuItem value="Online">Online</MenuItem>
            <MenuItem value="Offline">Offline</MenuItem>
            <MenuItem value="Both">Both</MenuItem>
          </Select>
        </FormControl>

        <TextField sx={{ m: 1, minWidth: 200 }} name="price" variant="outlined" label="Price (Baht/Hour)" fullWidth value={courseData.price} onChange={(e) => setCourseData({ ...courseData, price: e.target.value })} />

        <TextField sx={{ m: 1, minWidth: 200 }} name="availability" variant="outlined" label="When are you available?" placeholder="e.g. Thursday (9am - 11am)" fullWidth value={courseData.availability} onChange={(e) => setCourseData({ ...courseData, availability: e.target.value })} />

        <Button sx={{ m: 1, minWidth: 200 }} variant="contained" color="blue" size="large" type="submit" fullWidth>
          Submit
        </Button>
      </form>
    </Paper>
  );
}

export default FormTeach;
