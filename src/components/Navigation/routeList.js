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
import BusinessIcon from '@material-ui/icons/Business';
import AssessmentIcon from '@material-ui/icons/Assessment';
import SpeakerNotesIcon from '@material-ui/icons/SpeakerNotes';

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
            <ListItemText primary="Home" />
        </ListItem>
    </Link>
    <Link to={ROUTES.ACCOUNT}>
        <ListItem button>
            <ListItemIcon>
                <AccountBoxIcon />
            </ListItemIcon>
            <ListItemText primary="Account" />
        </ListItem>
    </Link>
    <Link to={ROUTES.ARTICLES}>
        <ListItem button>
            <ListItemIcon>
                <LibraryBooksIcon />
            </ListItemIcon>
            <ListItemText primary="Curated Articles" />
        </ListItem>
    </Link>
    <Link to={ROUTES.COMPANY}>
        <ListItem button>
            <ListItemIcon>
                <BusinessIcon />
            </ListItemIcon>
            <ListItemText primary="Company" />
        </ListItem>
    </Link>
    <Link to={ROUTES.MARKETNOW}>
        <ListItem button>
            <ListItemIcon>
                <AssessmentIcon />
            </ListItemIcon>
            <ListItemText primary="Market Now" />
        </ListItem>
    </Link>
    <Link to={ROUTES.COMMENTARY}>
        <ListItem button>
            <ListItemIcon>
                <SpeakerNotesIcon />
            </ListItemIcon>
            <ListItemText primary="Commentary" />
        </ListItem>
    </Link>
</List>
);

export default SidebarList;