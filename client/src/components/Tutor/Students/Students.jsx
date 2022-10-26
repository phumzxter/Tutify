import React from 'react';
import { Paper, Container, Grid, Typography, CircularProgress } from '@mui/material';
import { fetchTutees } from '../../../api/index';
import Student from './Student/Student';
const Students = (props) => {
  const [tutees, setTutees] = React.useState([]);

  fetchTutees()
    .then((result) => {
      setTutees(result);
      // console.log('courses', courses);
    })
    .catch((error) => {
      if (error.response) {
        // console.log(error.response.data); // => the response payload
        alert(error.response.data.message);
      }
    });

  return (
    <Container maxWidth="xl">
      {/* <SearchBar value={textFieldValue} onChange={(newValue) => setTextFieldValue(newValue)} onSearch={handleSearch} /> */}
      <Grid container justify="space-between" alignItems="stretch" spacing={3}>
        <Grid item xs={12} sm={8}>
          <Typography sx={{ marginTop: 9, marginBottom: 3, minWidth: 200 }} variant="h4">
            Students
          </Typography>

          {!tutees.length ? (
            <CircularProgress />
          ) : (
            <Grid container alignItems="stretch" spacing={3}>
              {tutees.map((oneTutee) => (
                <Grid key={oneTutee._id} item>
                  <Student chatChange={props.chatChange} tutee={oneTutee} />
                </Grid>
              ))}
            </Grid>
          )}
        </Grid>
      </Grid>
    </Container>
  );
};

export default Students;

// import React from 'react';
// import { Container, AppBar, Typography, Grow, Grid, Paper } from '@mui/material';

// const Students = () => {
//   return (
//     <div>
//       <Paper
//         elevation={2}
//         style={{
//           padding: 30,
//         }}
//       >
//         <Typography sx={{ marginTop: 0, marginBottom: 0, minWidth: 0 }} variant="h6">
//           Tutee &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Course
//         </Typography>
//         <Typography sx={{ marginTop: 0, marginBottom: 0, minWidth: 0 }} variant="h7">
//           Fathiel Evershade &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;CSX1001 Introduction to Programming
//         </Typography>
//       </Paper>
//     </div>
//   );
// };

// export default Students;
