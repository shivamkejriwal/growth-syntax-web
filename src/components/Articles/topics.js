import React from 'react';
// import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import StockMarketTodayArticles from './StockMarketToday/index';
import StockHighlightsArticles from './StockHighlights/index';
import MarketAndEconomyArticles from './MarketAndEconomy/index';

const useStyles = makeStyles(theme => ({
    root: {
        padding: '20px',
        marginTop: '20px'
    },
    heading: {
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
        <div>
            <div className={classes.root}>
                <Typography variant="h5" 
                            className={classes.heading}
                            gutterBottom>
                    Stock Market Today
                </Typography>
                <StockMarketTodayArticles/>
            </div>
            <div className={classes.root}>
                <Typography variant="h5" 
                            className={classes.heading}
                            gutterBottom>
                    Stock Highlights
                </Typography>
                <StockHighlightsArticles/>
            </div>
            <div className={classes.root}>
                <Typography variant="h5" 
                            className={classes.heading}
                            gutterBottom>
                    Market and Economy
                </Typography>
                <MarketAndEconomyArticles/>
            </div>
        </div>
    );
}


export default Topics;