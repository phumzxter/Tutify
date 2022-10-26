import React from "react";
import RequestCourses from "../RequestCourses/RequestCourses";
import Popover from '@mui/material/Popover'; 
import { Container, Typography, Grid } from "@mui/material";

function Requested() {
  return (
    <Container maxWidth="xl">
      {/* <SearchBar value={textFieldValue} onChange={(newValue) => setTextFieldValue(newValue)} onSearch={handleSearch} /> */}
      <Grid container justify="space-between" alignItems="stretch" spacing={3}>
        <Grid item xs={12} sm={8}>
          <Typography
            sx={{ marginTop: 9, marginBottom: 5, minWidth: 200,color:"#3596D9", fontWeight: 'medium' }}
            variant="h4"
          >
            Requested
          </Typography>

          <RequestCourses />
        </Grid>
      </Grid>
    </Container>
  );
}

export default Requested;
