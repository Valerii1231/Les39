import React, {Component} from "react";
import ArticleActions from "./ArticleActions";
import ArticleBody from "./ArticleBody";
import ArticleTitle from "./ArticleTitle";

class Article extends Component {
    render (){
        return (
            <div>
                <div>
                    {this.props.children}
                    <ArticleTitle lang={this.props.lang} />
                </div>
                <div className="article">
                    {this.props.children}                  
                    <ArticleBody lang={this.props.lang} />
                    <ArticleActions lang={this.props.lang} />
                </div>
            </div>
        );
    }
}

export default Article;


