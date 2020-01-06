import React, { Component } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Typography from '@material-ui/core/Typography';
import { withFirebase } from '../../Firebase';


class StockMarketTodayArticles extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            articles: [],
        };
    }

    componentDidMount() {
        const articles = [];
        const articlesQuery = this.props.firebase.getArticlesByCategory('Stock Market Today', 3);

        articlesQuery.get()
            .then(snapshot => snapshot
                .forEach(doc => {
                    const data = doc.data();
                    data.id = doc.id;
                    articles.push(data);
                })
            )
            .then(() => {
                this.setState({
                    articles,
                    loading: false,
                });
            });
    }

    getData() {
        return this.state.articles.map(article => {
            return (
                <ListItem key={article.id}>
                    <Typography variant='body1'>
                        {article.title} 
                    </Typography>
                </ListItem>
                
            );
        });
    }

    render() {
        return (
            <List>
                {this.getData()}
            </List>
        );  
    }
};


export default withFirebase(StockMarketTodayArticles);