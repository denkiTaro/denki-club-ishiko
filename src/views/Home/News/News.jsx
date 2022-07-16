import React from 'react';
import './_News.scss';
import NewsCard from './NewsCard.jsx';
import MoreBtn from '../MoreBtn/MoreBtn.jsx';

import { BrowserRouter, Router, Route, Link, Routes } from 'react-router-dom';

// import fields from '../../../services/database/database';

class News extends React.Component {
  render() {
    return (
      <div className="news" id="news">
        <h1>NEWS</h1>
        <div className="news-cardBox">
          <NewsCard lastUpdate='2022.2.2' category='web'     noteTitle='和やかで真剣な活動意欲' />
          <NewsCard lastUpdate='2022.2.2' category='web'     noteTitle='初心者に優しいweb作り' />
          <NewsCard lastUpdate='2022.2.2' category='monocon' noteTitle='ものコン班の活動紹介' />
          <NewsCard lastUpdate='2022.2.2' category='web'     noteTitle='web班の活動内容' />
        </div>
          <MoreBtn url='news-main' />
      </div>
    );
  }
}

export default News;
