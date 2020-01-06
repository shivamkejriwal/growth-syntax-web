import React from 'react';
import Typography from '@material-ui/core/Typography';
import ArticleList from './articleList';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

var divStyle = {
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

const ArticlesPages = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div style={divStyle}>
      <Typography variant='h5'
                  align='center'
                  gutterBottom>
          Curated Articles
      </Typography>
      <Tabs indicatorColor='primary'
            textColor='secondary'
            variant='fullWidth'
            value={value}
            onChange={handleChange}
            centered>
        <Tab label='Topics' ></Tab>
        <Tab label='Recent' ></Tab>
      </Tabs>
      <TabPanel value={value} index={0}>
        Topic's
      </TabPanel>
      <TabPanel value={value} index={1}>
        <ArticleList/>
      </TabPanel>
    </div>
  );
}

export default ArticlesPages;