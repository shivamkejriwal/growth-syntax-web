import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import InboxIcon from '@material-ui/icons/MoveToInbox';
// import MailIcon from '@material-ui/icons/Mail';
import Divider from '@material-ui/core/Divider';

import * as ROUTES from '../../constants/routes';
import { Link } from 'react-router-dom';
import { AuthUserContext } from '../Session';
import SignOutButton from '../SignOut';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  linkText: {
      color: '#fff',
      textDecoration: 'none'
  }
}));

const Navigation = () => (
    <AuthUserContext.Consumer>
      {authUser => (
          <TopAppBar authUser={authUser} />
        )
      }
    </AuthUserContext.Consumer>
);

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


const TopAppBar = ({ authUser }) => {
    const classes = useStyles();
    const [open, setOpen] = React.useState(true);
    const handleDrawerOpen = () => {
        setOpen(true);
    };
    const handleDrawerClose = () => {
        setOpen(false);
    };
    console.log(`[sk]drawer state - ${open}`);
    return (
        <div className={classes.root}>
        <AppBar position="static">
            <Toolbar>
            <IconButton edge="start" 
                        className={classes.menuButton} 
                        color="inherit" 
                        aria-label="menu"
                        onClick={handleDrawerOpen}>
                <MenuIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
                Growth Syntax
            </Typography>
            <AuthButton authUser={authUser} />
            </Toolbar>
        </AppBar>
        <Drawer open={open} onClose={handleDrawerClose}>
        <div className={classes.toolbarIcon}>
            <IconButton onClick={handleDrawerClose}>
                <ChevronLeftIcon />
            </IconButton>
            </div>
            <Divider />
            <List>
                <Link to={ROUTES.LANDING}>
                    <ListItem button>
                        <ListItemIcon>
                            <InboxIcon />
                        </ListItemIcon>
                        <ListItemText primary="Landing" />
                    </ListItem>
                </Link>
                <Link to={ROUTES.HOME}>
                    <ListItem button>
                        {/* <ListItemIcon>
                            <InboxIcon />
                        </ListItemIcon> */}
                        <ListItemText primary="HOME" />
                    </ListItem>
                </Link>
                <Link to={ROUTES.ACCOUNT}>
                    <ListItem button>
                        {/* <ListItemIcon>
                            <InboxIcon />
                        </ListItemIcon> */}
                        <ListItemText primary="ACCOUNT" />
                    </ListItem>
                </Link>
            </List>
            {/* {sideList('left')} */}
        </Drawer>
        </div>
    );
};

export default Navigation;