import React, { PropTypes } from 'react';
import StoryCard from '../../component/storycard';
import { getJson } from '../../utils/helper';


class AboutStory extends React.Component {
  constructor(){
   super();
   this.state={
      data:[],
     wait:true
   }
 }
 componentDidMount(){
   getJson()
     .then( (recData) => {
       this.setState({
         data:recData.getJson,
         wait:false
       })
     });
 }
  render (){

    return(
       <div style={{ width:'100%',marginTop:'20px' }}>

        { this.state.wait ? "请稍等" : this.state.data.map( (item,i) => <StoryCard {...item} key={i} /> ) }
      </div>
    )
  }
}

export default AboutStory;
