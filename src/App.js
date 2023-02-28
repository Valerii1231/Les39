import React, {Component} from "react";
import ArticleBody from "./components/ArticleBody";
import ArticleActions from "./components/ArticleActions";
import Article from "./components/Article";
import LangContext from "./components/Lang-context";


let EN = {
  title: 'NVIDIA news',
  title1: 'NVIDIA Accelerated AI on Azure',
  description: 'Article description:',
  description_text: 'NVIDIA on Azure is bringing AI, networking, and high-performance computing to the enterprise.',
  btn: 'Read',
  current_lang: 'EN'
}

let UA = {
  title: 'НОВИНИ NVIDIA',
  title1: 'Прискоренний штучний інтелект NVIDIA вAzure',
  description: 'Опис статті:',
  description_text: 'NVIDIA на Azure надає підприємствам можливості штучного інтелекту, мереж та високопродуктивних обчислень.',
  btn: 'Читати',
  current_lang: 'UA'
}
 
let langBtns;

class App extends Component{

  constructor(){
    super()
    let savedLang = localStorage.getItem('lang') || 'EN'; 
    let lang = savedLang === 'UA' ? UA : EN;    
    if (!savedLang) {     
      localStorage.setItem('lang', 'EN');
    }
      this.state = {
      lang: lang
    };
  }

  componentDidMount(){
  langBtns = document.querySelectorAll('.lang-btn');
  langBtns[1].classList.add('active');
  }

  componentDidUpdate(prevProps, prevState){
    if(prevState.lang !== this.state.lang){
    langBtns.forEach(btn => btn.classList.remove('active'));
    this.state.lang.current_lang === 'UA' ? langBtns[0].classList.add('active')
                                          : langBtns[1].classList.add('active') 
    }
  } 
  
  SetLangUA(){
    this.setState({lang: UA});
    localStorage.setItem('lang', 'UA');
  }

  SetLangEN(){
  this.setState({lang: EN});
  localStorage.setItem('lang', 'EN');
  }
 
  render(){
    return (
      <div className="wrapper">   
        <LangContext.Provider value={this.state.lang}>
          <Article ></Article>
          <div className="lang">
            <button onClick={this.SetLangUA.bind(this)} 
            className="lang-btn">UA</button>
            <button onClick={this.SetLangEN.bind(this)}
            className="lang-btn">EN</button>
          </div>
        </LangContext.Provider>       
      </div> 
    )
  }   
}

export default App;


  