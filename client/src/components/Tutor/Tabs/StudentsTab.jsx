import React from 'react';
import { Container, AppBar, Typography, Grow, Grid } from '@mui/material';
import SearchBar from '../../SearchBar';
import Students from '../Students/Students';

function StudentsTab(props) {
  return <Students chatChange={props.chatChange} />;
}

export default StudentsTab;
