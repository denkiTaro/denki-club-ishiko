import React from "react";
import Hinagata from "./Hinagata";

class ArticlePage extends React.Component{
    constructor(props){
        super(props)
    }

    articleData(){
        this.articleTitle      = JSON.parse(window.localStorage.getItem('articleTitle'));
        this.articleLastUpdate = JSON.parse(window.localStorage.getItem('articleLastUpdate'));
        this.articleText       = JSON.parse(window.localStorage.getItem('articleText'));
        this.articleSrc        = (this.articleSrc!=undefined)?JSON.parse(window.localStorage.getItem('articleSrc')):'https://www.yewton.net/2020/01/13/unsplash-pexels-pixabay/2020-01-13_11-46-07_abstract-architecture-building-exterior-geometric-593158.jpg';
        this.articleAttribute  = JSON.parse(window.localStorage.getItem('articleAttribute'));
    }

    render(){return(
        <div>
        {this.articleData()}
            <Hinagata
            title      ={`${this.articleTitle}`}
            lastUpdate ={`${this.articleLastUpdate}`}
            attribute  ={`${this.articleAttribute}`}
            article    ={`${this.articleText}`.replace(/。/g, `。\n`)}
            src        ={`${this.articleSrc}`}
            />
        </div>
    )}
}


export default ArticlePage;
