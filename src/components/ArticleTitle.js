import React, {Component} from "react";
import LangContext from "./Lang-context";

class ArticleTitle extends Component{
  render(){   
    return (
      <LangContext.Consumer>
        {
          (context) => {
            return (
              <div>
                <h1 className="title">{context.title}</h1>            
              </div>
            )
          }
        }
      </LangContext.Consumer>
      )
    }
  }

export default ArticleTitle;