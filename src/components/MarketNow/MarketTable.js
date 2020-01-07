import React from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import TickerTable from './TickerTable';



const TabPanel = (props) => {
  const { children, value, index } = props;
  return (
    <div  role='tabpanel'
          hidden={value !== index}>
      {children}
    </div>
  );
};

const MarketTable = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
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

export default MarketTable;