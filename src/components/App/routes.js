import React from 'react';
import { Route } from 'react-router-dom';
import Container from '@material-ui/core/Container';

import LandingPage from '../Landing';
import SignUpPage from '../Authentication/SignUp';
import SignInPage from '../Authentication/SignIn';
import PasswordForgetPage from '../Authentication/PasswordForget';
import HomePage from '../Home';
import AccountPage from '../Account';
import ArticlesPage from '../Articles';
import CompanyPage from '../Company';
import MarketNowPage from '../MarketNow';
import CommentaryPage from '../Commentary';
// import AdminPage from '../Admin';
import * as ROUTES from '../../constants/routes';

const AppRoutes = () => (
    <Container maxWidth="lg">
        <Route exact path={ROUTES.LANDING} component={LandingPage} />
        <Route path={ROUTES.SIGN_UP} component={SignUpPage} />
        <Route path={ROUTES.SIGN_IN} component={SignInPage} />
        <Route
            path={ROUTES.PASSWORD_FORGET}
            component={PasswordForgetPage}
        />
        <Route path={ROUTES.ARTICLES} component={ArticlesPage} />
        <Route path={ROUTES.COMPANY} component={CompanyPage} />
        <Route path={ROUTES.HOME} component={HomePage} />
        <Route path={ROUTES.ACCOUNT} component={AccountPage} />
        <Route path={ROUTES.MARKETNOW} component={MarketNowPage} />
        <Route path={ROUTES.COMMENTARY} component={CommentaryPage} />
        {/* <Route path={ROUTES.ADMIN} component={AdminPage} /> */}
    </Container>  
);
export default AppRoutes;