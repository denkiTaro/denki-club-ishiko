import React from 'react';
import ScrollToTop from './components/ScrollToTop.jsx';
import Home from './views/Home/Home.jsx';
import UnityAbout from './views/Team/UnityAbout.jsx';
import MonoAbout from './views/Team/MonoAbout.jsx';
import WebAbout from './views/Team/WebAbout.jsx';
import './style.scss';
import { BrowserRouter, Router, Route, Link, Routes } from 'react-router-dom';
import NewsMain from './views/Home/News/NewsMain/NewsMain.jsx';
import './views/Home/News/NewsMain/Hinagata/Hinagata.jsx';
import ArticlePage from './views/Home/News/NewsMain/Hinagata/ArticlePage';

export default function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/unity" element={<UnityAbout />} />
          <Route path="/monocon" element={<MonoAbout />} />
          <Route path="/web" element={<WebAbout />} />

          <Route path="/news-main" element={<NewsMain />} />
          <Route path="/hinagata" element={<ArticlePage/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

