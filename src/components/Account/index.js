import React from 'react';
import { AuthUserContext, withAuthorization } from '../Authentication/Session';
import { PasswordForgetForm } from '../Authentication/PasswordForget';
import PasswordChangeForm from '../Authentication/PasswordChange';

const AccountPage = () => (
  <AuthUserContext.Consumer>
    {authUser => (
      <div>
        <h1>Account Page</h1>
        <PasswordForgetForm />
        <PasswordChangeForm />
      </div>
      )}
  </AuthUserContext.Consumer>
);
const condition = authUser => !!authUser;
export default withAuthorization(condition)(AccountPage);