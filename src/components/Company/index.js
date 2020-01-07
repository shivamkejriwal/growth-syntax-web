import React from 'react';
import { withAuthorization } from '../Authentication/Session';
const CompanyPage = () => (
  <div>
    <h1>Company Page</h1>
    <p>The Company Page is accessible by every signed in user.</p>
  </div>
);
const condition = authUser => !!authUser;
export default withAuthorization(condition)(CompanyPage);