import React from "react";
import Helmet from 'react-helmet';
import "./NewsMain.scss";
import Header from '../../../../components/Header/Header.jsx';
import NewsArticleGroup from "./NewsArticleGroup";

import news1 from '../../../../assets/images/jpg/news1.jpg';


class NewsMain extends React.Component {

    changeClassName(ref,className) {
        return (()=>{
            ref.target.classList.toggle(`${className}`);
        })()
    }

render() {return(
    <div className='News-main-container'>
        <Helmet>
            <title>NEWS</title>
        </Helmet>

        <div className="News-main-header-container">
            <Header/>
            <div className="News-main-header-img-container">
                <img src={news1} alt="" />
            </div>
            <div className="News-main-header-point-container">
                <div className='header-point'/>
                <h2>NEWS</h2>
            </div>
        </div>
        <main className="NEWSMain">
            <div className='categoryContainer'>
            <div className='categoryTitle'><h3>CATEGORY</h3></div>
            <label className='categoryTopics' htmlFor='checkboxUnity'   onClick={ref=>{this.changeClassName(ref,'categoryTopicsChecked')}}>UNITY</label>
            <label className='categoryTopics' htmlFor='checkboxWeb'     onClick={ref=>{this.changeClassName(ref,'categoryTopicsChecked')}}>WEB</label>
            <label className='categoryTopics' htmlFor='checkboxMonocon' onClick={ref=>{this.changeClassName(ref,'categoryTopicsChecked')}}>MONOCON</label>
            </div>
            <div className='articlesContainer'>
                <input className='classCheckboxUnity'   id='checkboxUnity' type="checkbox"/>
                <input className='classCheckboxWeb'     id='checkboxWeb' type="checkbox"/>
                <input className='classCheckboxMonocon' id='checkboxMonocon' type="checkbox"/>
                <NewsArticleGroup/>
            </div>
        </main>
        <footer className="newsMainFooter"/>
    </div>
)};
}



export default NewsMain;
