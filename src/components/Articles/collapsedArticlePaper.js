import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';

const divStyle = {
    padding: '20px',
    width: '100%'
};

const createMarkup = (content) => {
    return { 
        __html: content 
    }
}

class CollapsedArticlePaper extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false,
            article: props.article
        };
        this.toggleHidden = this.toggleHidden.bind(this);
    }
    
    toggleHidden() {
        this.setState({ 
            show: !this.state.show 
        });
    }

    render() {
        return (
            <Paper style={divStyle} onClick={this.toggleHidden}>
                <Typography variant='body1'>
                    {this.state.article.title} 
                </Typography>
                { this.state.show 
                    ? <div dangerouslySetInnerHTML={createMarkup(this.state.article.content)}/>
                    : null 
                }
            </Paper>
        )
    }
}

export default CollapsedArticlePaper;