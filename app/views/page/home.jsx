import React from 'react';

import api from '../../api';
import AddArticleForm from '../components/article/form/Add';
import ArticleListComponent from '../components/article/List';

class HomePage extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            articles: [...this.props.articles]
        };
    }

    render() {
        return (
            <div>
                <AddArticleForm
                    handleAddArticle={this.handleAddArticle.bind(this)}
                />

                <ArticleListComponent
                    articles={this.state.articles}
                />
            </div>
        );
    }

    handleAddArticle(url) {
        api.post('/article')
            .send({ url: url })
            .end((err, res) => {
                const articles = [...this.state.articles];

                articles.unshift(res.body);

                this.setState({ articles: articles });
            });
    }

}

export default HomePage;
