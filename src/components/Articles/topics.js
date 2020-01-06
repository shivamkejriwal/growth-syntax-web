import React from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import StockMarketTodayArticles from './StockMarketToday/index';
import StockHighlightsArticles from './StockHighlights/index';
import MarketAndEconomyArticles from './MarketAndEconomy/index';

const useStyles = makeStyles(theme => ({
    root: {
        padding: '20px',
    },
    heading: {
        // backgroundColor: '#0388fc',
        // color: 'white',
        borderBottom: '1px solid black'
    },
    content: {
        marginTop: '20px',
        marginBottom: '20px',
    },
    author: {}
  }));

const Topics = () => {
    const classes = useStyles();

    return (
        <Paper className={classes.root}>
            <Typography variant="h5" 
                        className={classes.heading}
                        gutterBottom>
                Stock Market Today
            </Typography>
            <StockMarketTodayArticles/>
            <Typography variant="h5" 
                        className={classes.heading}
                        gutterBottom>
                Stock Highlights
            </Typography>
            <StockHighlightsArticles/>
            <Typography variant="h5" 
                        className={classes.heading}
                        gutterBottom>
                Market and Economy
            </Typography>
            <MarketAndEconomyArticles/>
        </Paper>
    );
}


export default Topics;