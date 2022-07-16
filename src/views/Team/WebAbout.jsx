import React from 'react';
import Team from './Team.jsx';

import web1 from '../../assets/images/jpg/web1.jpg';
import web2_1 from '../../assets/images/png/web2.png';
import web2_2 from '../../assets/images/png/web3.png';
import web2_3 from '../../assets/images/png/web4.png';

class WebAbout extends React.Component {
  render() {
    return (
      <Team
        title="Web班"
        img={web1}
        about="web班ではプログラミング言語を使用して、WebアプリやWebページを制作しています。自分の実力に合ったものを自分のペースで作れるので、初心者も上級者も楽しく活動しています。部内での発表会もあります。互いに影響を与え合って次の制作に繋がっているようで、緩い雰囲気ですがプログラミングには本気の部員達です。"
        fComentFirst="一般社団法人イトナブ石巻さんから講師の方が来ていて、プログラミングに関するあらゆる知識を教わることができます。"
        // fComentSecond="何でも作れるwebの世界で、自分の創造力を広げることができます。"
        fComentSecond="web技術によって自力でインターネット上に自身の作品をアピールすることができます。"
        fComentThird="プログラミングは難しいですが、成長が実感しやすいので自信が付いて続けられます。"
        imgFirst  = {web2_1}
        imgSecond = {web2_2}
        imgThird  = {web2_3}
        videoFirst="https://drive.google.com/uc?export=view&id=1EnPcJNQksXY0LesHJQtBMHoS5YJ3-nGT"
        videoSecond="https://drive.google.com/uc?export=view&id=11nRqlEt0ciY-_OneRUCciyJOHCKRatb1"
        videoThird="https://drive.google.com/uc?export=view&id=1gvFCm73soWZr4fDrm7ZdJs1349yeDaH6"
      />
    );
  }
}

export default WebAbout;
