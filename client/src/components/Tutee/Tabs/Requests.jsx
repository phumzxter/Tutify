import React from "react";
import FormRequest from "../Form/FormRequest";
import { Grid, Typography, Container } from "@mui/material";
import RequestCourses from "../RequestCourses/RequestCourses";

const Requests = () => {
  return (
    <div>
      <Container maxWidth="xl">
        <Grid container justify="space-between" alignItems="stretch" spacing={3}>
          <Grid item xs={12} sm={4}>
            <Typography sx={{ marginTop: 9, marginBottom: 3, minWidth: 200, color:"#3596D9", fontWeight: 'medium' }} variant="h4">
              Requests
            </Typography>
            <FormRequest />
          </Grid>
          <Grid item xs={12} sm={8}>
            <RequestCourses />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Requests;
