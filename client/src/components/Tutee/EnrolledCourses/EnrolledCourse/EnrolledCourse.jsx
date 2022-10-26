import React from 'react';
import { Card, CardContent, Button, CardActions, Typography } from '@mui/material';
import { withdraw } from '../../../../api/index.js';

function EnrolledCourse(props) {
  function onClickHandler() {
    props.chatChange(props.course.tutorname);
    console.log(props.course.tutor);
  }

  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography variant="h6">{props.course.course}</Typography>
        <Typography variant="h7" sx={{ textDecoration: 'underline' }}>
          {props.course.tutorname}
        </Typography>
        <Typography>{props.course.type}</Typography>
        <Typography>{props.course.price} Baht/Hour</Typography>
        <Typography>{props.course.availability}</Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={onClickHandler}>
          Chat
        </Button>
        <Button
          size="small"
          onClick={() => {
            withdraw(props.course._id);
          }}
        >
          Remove
        </Button>
      </CardActions>
    </Card>
  );
}

export default EnrolledCourse;
