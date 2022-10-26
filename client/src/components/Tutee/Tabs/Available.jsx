import React, { useState, useEffect } from "react";
import AvailableCourses from "../AvailableCourses/AvailableCourses";

import { Container, AppBar, Typography, Grow, Grid } from "@mui/material";
import Popover from '@mui/material/Popover';

function Available() {
  const handleSearch = () => {};
  return (
    <div>
      <Container maxWidth="xl">
        {/* <SearchBar value={textFieldValue} onChange={(newValue) => setTextFieldValue(newValue)} onSearch={handleSearch} /> */}
        <Grid container justify="space-between" alignItems="stretch" spacing={3}>
          <Grid item xs={12} sm={8}>
            <Typography
              sx={{ marginTop: 9, marginBottom: 5, minWidth: 200, color:"#3596D9", fontWeight: 'medium' }}
              variant="h4">
              Available
            </Typography>
            {/* <Button aria-describedby={id} variant="contained" onClick={handleClick}>
              Open Popover
            </Button>
            <Popover
              id={id}
              open={open}
              anchorEl={anchorEl}
              onClose={handleClose}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
            >
              <Typography sx={{ p: 2 }}>The content of the Popover.</Typography>
            </Popover> */}
            <AvailableCourses />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default Available;
