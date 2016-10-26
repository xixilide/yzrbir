import React, { PropTypes } from 'react'
import Img1 from '../img/m2.jpg';
import Img2 from '../img/m5.jpg';
import Img3 from '../img/m1.jpg';
import Img4 from '../img/m4.jpg';



class Work extends React.Component {
  render () {
    return(
      <div className="work-container">


        <div className="work-card">
              <a href="#"><img src={Img1} /></a>
                  <div className="work-text">
                    <h3>青春</h3>
                  </div>
                </div>

      <div className="work-card">
            <a href="http://model.100autoshow.com/"><img src={Img2} /></a>
                <div className="work-text">
                  <h3>无悔</h3>
                </div>
              </div>

    <div className="work-card">
          <a href="#"><img src={Img3} /></a>
              <div className="work-text">
                <h3>友谊</h3>
              </div>
    </div>

  <div className="work-card">
        <a href="#"><img src={Img4} /></a>
          <div className="work-text">
              <h3>不老</h3>s
        </div>
  </div>
</div>
    )
  }
}

export default Work;
