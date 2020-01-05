import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import SignOutButton from '../SignOut';
import * as ROUTES from '../../constants/routes';
import useStyles from './useStyles';

const AuthButton = ({ authUser }) => {
    const classes = useStyles();

    return authUser
    ?(
        <SignOutButton />
    )
    :(
        <Link to={ROUTES.SIGN_IN} className={classes.linkText}>
            <Button color="inherit">Login</Button>
        </Link>
    );
};

export default AuthButton;