import React from 'react';
import { withFirebase } from '../../Firebase';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  linkText: {
      color: '#fff',
      textDecoration: 'none'
  }
}));

const SignOutButton = ({ firebase }) => {
  const classes = useStyles();
  return (
    <Button type="button" 
          onClick={firebase.doSignOut}
          className={classes.linkText}>
      Sign Out
    </Button>
  );
};
export default withFirebase(SignOutButton);