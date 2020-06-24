import React from "react";

import {
  dashboard24HoursPerformanceChart,
  dashboardEmailStatisticsChart,
  dashboardNASDAQChart
} from "variables/charts.jsx";

class About extends React.Component {

    constructor(props) {
        super(props)
    
        this.state = {
          data1: dashboard24HoursPerformanceChart.data,
          option1: dashboard24HoursPerformanceChart.options,
    
          data2: dashboardEmailStatisticsChart.data,
          option2: dashboardEmailStatisticsChart.options,
    
          data3: dashboardNASDAQChart.data,
          option3: dashboardNASDAQChart.options
        }
      }
      render() {
        return (
          <>
            <div className="content">
                
            </div>
      </>
    );
}
}

export default About;