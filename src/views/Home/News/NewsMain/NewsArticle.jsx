import React from "react";
import { Link } from "react-router-dom";

class NewsArticle extends React.Component {
    constructor(props){
        super(props)
        // list
        // attribute
        // src
        // lastUpdate
        // noteTitle
    }

    saveData() {
        window.localStorage.removeItem('articleTitle');
        window.localStorage.removeItem('articleLastUpdate');
        window.localStorage.removeItem('articleText');
        window.localStorage.removeItem('articleSrc');
        window.localStorage.removeItem('articleAttribute');
        window.localStorage.setItem('articleTitle', JSON.stringify(this.props.noteTitle));
        window.localStorage.setItem('articleLastUpdate', JSON.stringify(this.props.lastUpdate));
        window.localStorage.setItem('articleText', JSON.stringify(this.props.text));
        if(this.props.src!=undefined)window.localStorage.setItem('articleSrc', JSON.stringify(this.props.src));
        window.localStorage.setItem('articleAttribute', JSON.stringify(this.props.attribute))
    }

render() { return(
    <>
    {this.props.list}
    <div className={`articles ${this.props.attribute}OfArticles`} onClick={()=>{this.saveData()}}>
        <Link to={'/hinagata'}>
            <div className='articleImgWrapper'>
                <img src={this.props.src}/>
                </div>
                <div className='noteTextContainer'>
                <div className='lastUpdate'>{this.props.lastUpdate} / {this.props.attribute}</div>
                <div className='noteTitle'>{this.props.noteTitle}</div>
            </div>
        </Link>
    </div>
    </>
)}
}


export default NewsArticle;
