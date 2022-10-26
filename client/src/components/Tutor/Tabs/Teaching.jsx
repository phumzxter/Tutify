import React, { useState, useEffect } from 'react';
import FormTeach from '../Form/FormTeach';
import Courses from '../Courses/Courses';
import { Container, AppBar, Typography, Grow, Grid } from '@mui/material';
import Students from '../Students/Students';

function Teaching(props) {
  const [view, setView] = React.useState(false);
  function viewChange() {
    console.log('hello');
    if (view === true) {
      setView(false);
    } else if (view === false) {
      setView(true);
    }
  }
  // function viewChange(e) {
  //   e.preventDefault();
  //   setVisible(true);
  // }

  if (view) {
    return <Students chatChange={props.chatChange} />;
  }
  return (
    <Container maxWidth="xl">
      <Grid container justify="space-between" alignItems="stretch" spacing={3}>
        <Grid item xs={12} sm={8}>
          <Typography sx={{ marginTop: 9, marginBottom: 3, minWidth: 200, color:"#3596D9", fontWeight: 'medium' }} variant="h4">
            Your Courses
          </Typography>
          <Courses viewChange={viewChange} />
          {/* <Courses setCurrentId={setCurrentId} /> */}
        </Grid>
        <Grid item xs={12} sm={4}>
          <FormTeach />
          {/* <FormTeach currentId={currentId} setCurrentId={setCurrentId} /> */}
        </Grid>
      </Grid>
    </Container>
  );
}

export default Teaching;
