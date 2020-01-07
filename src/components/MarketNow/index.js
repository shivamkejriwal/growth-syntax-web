import React from 'react';
import Typography from '@material-ui/core/Typography';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { withAuthorization } from '../Authentication/Session';
import TickerTable from './TickerTable';
const divStyle = {
  marginTop: '20px'
};

const TabPanel = (props) => {
  const { children, value, index } = props;
  return (
    <div  role='tabpanel'
          hidden={value !== index}>
      {children}
    </div>
  );
};

const MarketNowPage = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div style={divStyle}>
      <Typography variant='h5'
                  align='center'
                  gutterBottom>
          Market Now
      </Typography>
      <Tabs indicatorColor='primary'
            textColor='secondary'
            variant='fullWidth'
            value={value}
            onChange={handleChange}
            centered>
        <Tab label='Gainers' ></Tab>
        <Tab label='Losers' ></Tab>
        <Tab label='Active' ></Tab>
      </Tabs>
      <TabPanel value={value} index={0}>
        <TickerTable dataType='mostBought'/>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <TickerTable dataType='mostSold'/>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <TickerTable dataType='mostTraded'/>
      </TabPanel>
    </div>
  );
}


const condition = authUser => !!authUser;
export default withAuthorization(condition)(MarketNowPage);