import React from 'react';
import { Link } from 'react-router-dom';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import HomeIcon from '@material-ui/icons/Home';
import FlightLandIcon from '@material-ui/icons/FlightLand';

import * as ROUTES from '../../constants/routes';

const SidebarList = () => (
    <List>
    <Link to={ROUTES.LANDING}>
        <ListItem button>
            <ListItemIcon>
                <FlightLandIcon />
            </ListItemIcon>
            <ListItemText primary="Landing" />
        </ListItem>
    </Link>
    <Link to={ROUTES.HOME}>
        <ListItem button>
            <ListItemIcon>
                <HomeIcon />
            </ListItemIcon>
            <ListItemText primary="HOME" />
        </ListItem>
    </Link>
    <Link to={ROUTES.ACCOUNT}>
        <ListItem button>
            <ListItemIcon>
                <AccountBoxIcon />
            </ListItemIcon>
            <ListItemText primary="ACCOUNT" />
        </ListItem>
    </Link>
    <Link to={ROUTES.ARTICLES}>
        <ListItem button>
            <ListItemIcon>
                <LibraryBooksIcon />
            </ListItemIcon>
            <ListItemText primary="ARTICLES" />
        </ListItem>
    </Link>
</List>
);

export default SidebarList;