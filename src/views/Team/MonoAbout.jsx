import React from 'react';
import Team from './Team.jsx';

import monocon1 from '../../assets/images/jpg/monocon1.jpg';
import monocon2_1 from '../../assets/images/png/monocon2.png';
import monocon2_2 from '../../assets/images/png/monocon3.png';
import monocon2_3 from '../../assets/images/png/monocon4.png';

class MonoAbout extends React.Component {
  render() {
    return (
      <Team
        title="モノコン班"
        img={monocon1}
        about="ものこん班は主に大会出場に向けて日々練習をしています。出場する大会は、高校生ものづくりコンテスト(高校生による工業技術、技能を競うコンテスト)の電気系の電気工事部門です。日々の練習では、最初から最後まで通してミスした部分の原因、解決策を話し合ったり一部の作業を何回も繰り返して速く、正確にできるように練習しています。"
        fComentFirst="練習前、後などはみんなで話をしたりするが練習が始まると集中して行います。"
        // fComentSecond="モノコンと第二種電気工事士の実技試験の内容は似ているので施行が上手くなり資格が取りやすくなります。"
        fComentSecond='電気工事は我が電気情報科での一番の強味なので実技をより究めたい方におすすめです。'
        fComentThird="毎年開催される高校生による工業技術、技能を競う大会の優勝に向けて日々練習に励んでいます。"
        imgFirst  = {monocon2_1}
        imgSecond = {monocon2_2}
        imgThird  = {monocon2_3}
        videoFirst="https://drive.google.com/uc?export=view&id=1EnPcJNQksXY0LesHJQtBMHoS5YJ3-nGT"
        videoSecond="https://drive.google.com/uc?export=view&id=1-2JZVFXZhJTwBWnhZppco5JOByAUZTea"
      />
    );
  }
}

export default MonoAbout;
