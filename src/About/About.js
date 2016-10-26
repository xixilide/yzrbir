import React from 'react';
import Img1 from '../img/a1.jpg';
import Img2 from '../img/a2.jpg';
import Img3 from '../img/a3.jpg';
class About extends React.Component {
  render () {

    return(
      <div>
        <ul className="thumbnails">
          <li className="span4">
            <div className="thumbnail">
              <img src={Img1} />
              <h3>Thumbnail label</h3>
              <p>Thumbnail </p>
            </div>
          </li>
          <li className="span4">
            <div className="thumbnail">
              <img src={Img2} />
              <h3>Thumbnail label</h3>
              <p>Thumbnail caption...</p>
            </div>
          </li>
          <li className="span4">
            <div className="thumbnail">
              <img src={Img3} />
              <h3>Thumbnail label</h3>
              <p>Thumbnail </p>
            </div>
          </li>
        </ul>
      </div>
    )
  }
}

export default About;
