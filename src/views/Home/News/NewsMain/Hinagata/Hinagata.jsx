import React from "react";
import Header from "../../../../../components/Header/Header";
import './Hinagata.scss';
import Helmet from "react-helmet";


class Hinagata extends React.Component{
    constructor(props){
        super(props);
        // title
        // lastUpdate
        // attribute
        // article
        // src
    }
    render(){return(
<div className='HINAGATAContainer'>
    <Helmet>
        <title>{this.props.title}</title>
    </Helmet>
    <div className="News-main-header-container">
            <Header/>
            <div className="hinagata-img-container">
                {/* <img src="https://lh3.google.com/u/0/d/1ARJH-m7B7V6x76CDcK2zhCuRGbxTpD4X=w2000-h3618-iv1" alt="" /> */}
            </div>
        </div>
    <div className='HINAGATABody'>
    <header className='HINAGATAHeaderContainer'>
    <div className='HINAGATATitle'>{this.props.title}</div>
    <div className='lastUpdate'>{this.props.lastUpdate} / {this.props.attribute}</div>
    </header>
        <main className='HINAGATAMain'>
            <div className='HINAGATAImgContainer'>
                <img src={!(this.props.src)?this.props.src:'https://www.yewton.net/2020/01/13/unsplash-pexels-pixabay/2020-01-13_11-46-07_abstract-architecture-building-exterior-geometric-593158.jpg'} alt=""/>
            </div>
            <article className='articleText'>
                {this.props.article}
            </article>
            <div style={{height:'300px'}}/>
        </main>
    </div>
</div>
)}}

export default Hinagata;
