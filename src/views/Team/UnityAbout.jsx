import React from 'react';
import Team from './Team.jsx';

import unity1 from '../../assets/images/jpg/unity1.jpg';
import unity2_1 from '../../assets/images/png/unity2.png';
import unity2_2 from '../../assets/images/png/unity3.png';
import unity2_3 from '../../assets/images/png/unity4.png';


class UnityAbout extends React.Component {
  render() {
    return (
      <Team
        title="Unity班"
        img={unity1}
        about="Unity班の主な活動はUnityというゲームエンジンを使い、個人や団体で様々な作品を制作しています。ジャンルも制作側によって違い、シューティングゲーム（一人称や三人称など）やRPG、２D・３Dアクションゲームはもちろん、ゲーム以外のアプリも制作しています。"
        fComentFirst="一般社団法人イトナブ石巻さんから講師の方が来ていて、プログラミングに関するあらゆる知識を教わることができます。"
        // fComentSecond="活動の幅が広いので、生徒の趣味に合ったものや作りたいものを自由に制作することができます。"
        fComentSecond="個人個人での自由な作品制作も、グループ単位での作品制作も可能な、形態を選ばない活動ができます。なので自分が作りたいものをより効率的に作成することができます。"
        fComentThird="部員は先輩・後輩の仲がよく、分からないところを気軽に聞けたり、グループを作成して共同で作品を制作したり、雰囲気の良い状態で活動ができます。"
        imgFirst  = {unity2_1}
        imgSecond = {unity2_2}
        imgThird  = {unity2_3}
        videoFirst="https://drive.google.com/uc?export=view&id=1EnPcJNQksXY0LesHJQtBMHoS5YJ3-nGT"
        videoSecond="https://drive.google.com/uc?export=view&id=1TBpPIP_FsqN_RDoYjTWrpAwMbBAhFmCm"
        videoThird="https://drive.google.com/uc?export=view&id=1MhfN73fmzql50NH-Viczvsc5HZamRQT3"
      />
    );
  }
}

export default UnityAbout;
