import React from 'react';
import { Link } from 'react-router-dom';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import InboxIcon from '@material-ui/icons/MoveToInbox';
// import MailIcon from '@material-ui/icons/Mail';

import * as ROUTES from '../../constants/routes';

const RouteList = () => (
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
);

export default RouteList;