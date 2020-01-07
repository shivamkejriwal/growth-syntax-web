import React from 'react';
import { withAuthorization } from '../Authentication/Session';
const CommentaryPage = () => (
  <div>
    <h1>Commentary Page</h1>
    <p>The Commentary Page is accessible by every signed in user.</p>
  </div>
);
const condition = authUser => !!authUser;
export default withAuthorization(condition)(CommentaryPage);