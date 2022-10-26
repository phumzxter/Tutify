import React, { useState, useEffect } from 'react';
import EnrolledCourses from '../EnrolledCourses/EnrolledCourses';
import { Container, AppBar, Typography, Grow, Grid } from '@mui/material';

function Dashboard(props) {
  return (
    <Container maxWidth="xl">
      {/* <SearchBar value={textFieldValue} onChange={(newValue) => setTextFieldValue(newValue)} onSearch={handleSearch} /> */}
      <Grid container justify="space-between" alignItems="stretch" spacing={3}>
        <Grid item xs={12} sm={8}>
          <Typography sx={{ marginTop: 9, marginBottom: 3, minWidth: 200, color:"#3596D9", fontWeight: 'medium'}} variant="h4">
            Bookmarked Courses
          </Typography>

          <EnrolledCourses chatChange={props.chatChange} />
        </Grid>
      </Grid>
    </Container>
  );
}

export default Dashboard;
