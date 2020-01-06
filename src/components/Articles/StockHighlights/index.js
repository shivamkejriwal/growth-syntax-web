import React, { Component } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { withFirebase } from '../../Firebase';
import CollapsedArticlePaper from '../collapsedArticlePaper';


class StockHighlightsArticles extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            articles: [],
        };
    }

    componentDidMount() {
        const articles = [];
        const articlesQuery = this.props.firebase.getArticlesByCategory('Stock Highlights', 3);

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
                    <CollapsedArticlePaper article={article}/>
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


export default withFirebase(StockHighlightsArticles);