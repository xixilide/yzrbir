import React from 'react';
import Img1 from '../img/a1.jpg';
import Img2 from '../img/a2.jpg';
import Img3 from '../img/a3.jpg';
import Img4 from '../img/a5.jpg';

class About extends React.Component {
  render () {

    return(
      <div>
        <ul className="thumbnails">
          <li className="span4">
            <div className="thumbnail">
              <img src={Img1} />
              <h3>我们一直是对方的依靠</h3>
              <p>You are the only one! </p>
            </div>
          </li>
          <li className="span4">
            <div className="thumbnail">
              <img src={Img2} />
              <h3>我们愿意分享喜怒哀乐</h3>
              <p>We had all things in common in those days!</p>
            </div>
          </li>
          <li className="span4">
            <div className="thumbnail">
              <img src={Img3} />
              <h3>只有你能看穿我的逞强</h3>
              <p>You are my armor! </p>
            </div>
          </li>
          <li className="span4">
            <div className="thumbnail">
              <img src={Img4} style={{'width':'500px'}}/>
              <h3>朋友比情人更懂得倾听</h3>
              <p>a friend listens to you more than your lover </p>
            </div>
          </li>
        </ul>
      </div>
    )
  }
}

export default About;
