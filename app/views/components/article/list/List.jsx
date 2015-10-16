import React from 'react';

/* Components */
import ItemComponent from './item/Item';
import PanelComponent from '../../shared/Panel';

class ArticleList extends React.Component {

    render() {
        const content = this.renderContent();

        return (
            <div className="article-list">{content}</div>
        );
    }

    renderContent() {
        if (this.props.articles.length !== 0) {
            return this.renderItems();
        } else {
            return (
                <PanelComponent  type='info' message='The list is empty.' />
            );
        }
    }

    renderItems() {
        return this.props.articles.map((article) => {
            return (
                <ItemComponent
                    key={article._id}
                    article={article} />
            );
        });
    }

}

export default ArticleList;
