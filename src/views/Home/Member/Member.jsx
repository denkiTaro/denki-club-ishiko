import React from 'react';
import MemCard from './MemCard.jsx';
import './_Member.scss';

class Member extends React.Component {
  render() {
    return (
      <div className="member" id="member">
        <h1>TEAM</h1>
        <div className="member-card">
          <MemCard
            name="ものコン班"
            text="我が電気情報科で一番強いジャンルである電気工事の班です。モノづくりコンテストに向けて日々実技練習しています。"
            url="monocon"
          />
          <MemCard
            name="Web班"
            text='web作成はもちろん、既存の仕組みの自動化、効率化をweb技術で実現させる班です。このサイトもweb班による作成です。'
            url="web"
          />
          <MemCard
            name="Unity班"
            text="unityとC#(言語)を用いて2D、3Dゲームやアプリを作成し、U-22に出展することで自分の実力を試します。"
            url="unity"
          />
        </div>
      </div>
    );
  }
}

export default Member;
