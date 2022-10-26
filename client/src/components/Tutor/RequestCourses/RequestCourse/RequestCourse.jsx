import React, { useEffect } from "react";
import {
  Card,
  CardContent,
  Button,
  CardActions,
  Typography
} from "@mui/material";

function RequestCourse({ course }) {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography variant="h6">
          {course.course}
        </Typography>
        <Typography variant="h7" sx={{ textDecoration: "underline" }}>
          {course.tuteeRequestName}
        </Typography>
        <Typography>
          {course.type}
        </Typography>
        <Typography>
          {course.price} Baht/Hour
        </Typography>
        <Typography>
          {course.availability}
        </Typography>
      </CardContent>
      <CardActions>
        {/* <Button size="small" sx={{ textDecoration: 'line-through' }}>
          Chat
        </Button> */}
        <Button size="small">Chat</Button>
        {/* <Button size="small">Edit</Button> */}
        {/* <Button size="small" sx={{ textDecoration: 'line-through' }}>
          Tutee Detail
        </Button> */}
        {/* <Button size="small">Tutee Detail</Button> */}
      </CardActions>
    </Card>
  );
}

export default RequestCourse;
