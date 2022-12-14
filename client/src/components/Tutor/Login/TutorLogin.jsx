import React, { useState } from 'react';
import { Button, CssBaseline, TextField, FormControlLabel, Checkbox, Link, Grid, Box, Typography, Container, Stack, Switch } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import logo from '../../../assets/logo.png';
import { useNavigate } from 'react-router-dom';
import { logIn, signUp } from '../../../api/index';
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();
const initialState = { firstName: '', lastName: '', email: '', password: '', confirmPassword: '' };

//popup content 
const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2)
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1)
  }
}));
function BootstrapDialogTitle(props) {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose
        ? <IconButton
            aria-label="close"
            onClick={onClose}
            sx={{
              position: "absolute",
              right: 8,
              top: 8,
              color: theme => theme.palette.grey[500]
            }}
          >
            <CloseIcon />
          </IconButton>
        : null}
    </DialogTitle>
  );
}
//popup content


export default function TuteeLogin() {
  //popup content
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
//popupcontent
  
  //switch user type
  const navigate = useNavigate();
  const [checked, setChecked] = React.useState(false);
  const switchUserType = () => {
    navigate('/tutee/login');
  };


  //switch login signup
  const [isSignup, setIsSignup] = React.useState(false);
  const switchLoginSignup = () => {
    setForm(initialState);
    setIsSignup((prevIsSignup) => !prevIsSignup);
    // setShowPassword(false);
  };

  //form submit
  const [form, setForm] = useState(initialState);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (isSignup) {
      signUp(form)
        .then((response) => {
          localStorage.setItem('token', response.data.token);
          localStorage.setItem('user', JSON.stringify(response.data));
          localStorage.setItem('role', 'tutor');
          // console.log(localStorage.getItem("token"));
          let user = JSON.parse(localStorage.getItem('user'));
          axios
            .post(
              'https://api.chatengine.io/users/',
              { username: user.result.name, secret: user.result.password }, // Body object
              {
                headers: {
                  'PRIVATE-KEY': 'cba1b633-91bd-4f6c-b6af-78e3d0fc2ff2',
                },
              } // Headers object
            )
            .then((r) => {
              console.log(r);
             handleClickOpen();    
            });

          navigate('/tutor/dashboard');

        })
        .catch((error) => {
          if (error.response) {
            console.log(error.response.data); // => the response payload
            alert(error.response.data.message);
          }
        });
    } else {
      logIn(form)
        .then(function (response) {
          localStorage.setItem('token', response.data.token);
          localStorage.setItem('user', JSON.stringify(response.data));
          localStorage.setItem('role', 'tutor');
          navigate('/tutor/dashboard');
        })
        .catch((error) => {
          if (error.response) {
            console.log(error.response.data); // => the response payload
            alert(error.response.data.message);
          }
        });
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box sx={{ marginTop: 8, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <img src={logo} alt="Logo" width="25%" border-radius="50%" />

          <Typography component="h1" variant="h3" color="#3498DB">
            Au Tutify
          </Typography>

          {/* <Typography component="h1" variant="h4">
            Sign in
          </Typography> */}
          <Stack direction="row" spacing={1} alignItems="center">
            <Typography>Tutor</Typography>
            <Switch checked={checked} onChange={switchUserType} />
            <Typography>Tutee</Typography>
          </Stack>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <Grid container spacing={2}>
              {isSignup && (
                <>
                  <Grid item xs={12} sm={6}>
                    <TextField onChange={handleChange} autoComplete="given-name" name="firstName" required fullWidth id="firstName" label="First Name" autoFocus />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField onChange={handleChange} required fullWidth id="lastName" label="Last Name" name="lastName" autoComplete="family-name" />
                  </Grid>
                </>
              )}
              <Grid item xs={12}>
                <TextField onChange={handleChange} required fullWidth id="email" label="Email Address" name="email" autoComplete="email" />
              </Grid>
              <Grid item xs={12}>
                <TextField onChange={handleChange} required fullWidth name="password" label="Password" type="password" id="password" autoComplete="new-password" />
              </Grid>
              {isSignup && (
                <Grid item xs={12}>
                  <TextField onChange={handleChange} required fullWidth name="confirmPassword" label="Repeat Password" type="password" id="password" autoComplete="new-password" />
                </Grid>
              )}
            </Grid>
            {/* <TextField margin="normal" required fullWidth id="email" label="Email Address" name="email" autoComplete="email" autoFocus />
            <TextField margin="normal" required fullWidth name="password" label="Password" type="password" id="password" autoComplete="current-password" /> */}
            <FormControlLabel control={<Checkbox value="remember" color="primary" />} label="Remember me" />
            <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
              {isSignup ? 'Sign Up' : 'Sign In'}
            </Button>
          </Box>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link href="#" onClick={switchLoginSignup} variant="body2">
                {isSignup ? 'Already have an account? Sign in' : "Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
       <div>
      {/* <Button variant="outlined" onClick={handleClickOpen}>
        Open dialog
      </Button> */}
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <BootstrapDialogTitle
          id="customized-dialog-title"
          onClose={handleClose}
        >
        Tutor Sign Up
        </BootstrapDialogTitle>
        <DialogContent dividers>
          <Typography gutterBottom>
          Your account has been successfully created. 
          </Typography>
          <Typography gutterBottom>
          Login and enjoy Au Tutify.
          </Typography>
          {/* <Typography gutterBottom>
            Aenean lacinia bibendum nulla sed consectetur. Praesent commodo
            cursus magna, vel scelerisque nisl consectetur et. Donec sed odio
            dui. Donec ullamcorper nulla non metus auctor fringilla.
          </Typography> */}
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
           Okay
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </div>
    </ThemeProvider>
  );
}
