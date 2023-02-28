import React, {Component} from "react";
import LangContext from "./Lang-context";

class ArticleBody extends Component{
  render(){    
    return (
      <LangContext.Consumer>
        {
          (context) => {
            return (
              <div>               
                <div className="article__title">
                  <h2>{context.title1}</h2>                  
                </div> 
                <div className="article__body">                  
                  <h3 className="article__description">{context.description}</h3>                  
                  <p className="article__description--text">{context.description_text}</p>                  
                </div>
              </div>
            )
          }
        }
      </LangContext.Consumer>
      )
    }
  }

export default ArticleBody;

