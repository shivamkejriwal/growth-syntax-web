import React from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import SendIcon from '@material-ui/icons/Send';

const useStyles = makeStyles(theme => ({
    root: {
        padding: '20px',
    },
    heading: {},
    content: {
        marginTop: '20px',
        marginBottom: '20px',
    },
    author: {}
  }));

const Article = ({title, content, author, url}) => {
    const classes = useStyles();
    const createMarkup = () => {
        return { 
            __html: content 
        }
    }

    return (
        <Paper className={classes.root}>
            <Typography variant="h5" 
                        className={classes.heading}
                        gutterBottom>
                {title}
            </Typography>
            <div dangerouslySetInnerHTML={createMarkup()} className={classes.content}/>
            <Button color="primary"
                    variant="outlined"
                    className={classes.author}
                    href={url}
                    endIcon={<SendIcon/>}>
                {author}
            </Button>
        </Paper>
    );
}


export default Article;