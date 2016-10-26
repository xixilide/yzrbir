import React, { PropTypes } from 'react'
import  echarts from 'echarts/lib/echarts';

class AboutHobby extends React.Component {
  componentDidMount(){
    var myChart = echarts.init(document.getElementById('main'));

    var option = {
               title: {
                   text: 'ECharts 入门示例'
               },
               tooltip: {},
               legend: {
                   data:['销量']
               },
               xAxis: {
                   data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
               },
               yAxis: {},
               series: [{
                   name: '销量',
                   type: 'bar',
                   data: [5, 20, 36, 10, 10, 20]
               }]
           };
           myChart.setOption(option);

  }
  render () {

      return(
         <div id="main" style="width: 600px;height:400px;"></div>
      )

  }
}

export default AboutHobby;
