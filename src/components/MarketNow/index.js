import React from 'react';
import { withAuthorization } from '../Authentication/Session';
const MarketNowPage = () => (
  <div>
    <h1>Market Now Page</h1>
    <p>The MarketNow Page is accessible by every signed in user.</p>
  </div>
);
const condition = authUser => !!authUser;
export default withAuthorization(condition)(MarketNowPage);