import React, {Component} from 'react';
import "./assetsPage.css";
import Chart from "react-apexcharts";



     var dbData; 
     let req = new XMLHttpRequest();
  
      req.onreadystatechange = async() => {
      if (req.readyState == XMLHttpRequest.DONE) {
          dbData=JSON.parse(req.responseText);
          console.log(dbData);
           
      }
    };
  
    req.open("GET", "https://api.jsonbin.io/b/600acb4bbca934583e4037be", true);
    req.setRequestHeader("secret-key", "$2b$10$Ro.izxrzqvtFbz2XFF6S0ee4zJ3Jvc5XL3tFW97KdnDgaHtKAQQo2");
    req.send();

class analyser extends Component{
    constructor(props) {
        super(props);
    
        this.state = {
          options1: {},
          series1: [44, 55, 41, 17, 15],  
          options: {
            chart: {
              id: "basic-bar"
            },
            xaxis: {
              categories: [2001, 2004, 2007, 2010, 2013, 2016, 2019, 2021]
            }
          },
          series: [
            {
              name: "profit margin",
              data: [30, 40, 45, 50, 49, 60, 70, 91]
            }
          ]
        };
      }
    render() { 
        return(
            <div className="assets-container">
                <h1>Analyser</h1>

                <div className="section-container">
                    <h3>Financial Statement</h3>
                    <h3>Capital: 7.88 Cr</h3>
                    <h3>Investments: 5.9 Cr</h3>
                    <h3>Debts: 4.6 Cr</h3>
                    <Chart options={this.state.options1} series={this.state.series1} type="donut" width="320" />
                </div>
                <div class="section-container">
                    <h3>Finished Products  </h3>
                    <Chart options={this.state.options} series={this.state.series} type="line" width="320" />
                </div>
                <div className="section-container">
                    <h3>Staff : 310</h3>
                    <h3>Present :303 </h3>
                    <h3>Idle : 7</h3>
                </div>
                <div className="section-container">
                    <h3>Markets : 125</h3>
                    <h3>Cities : Kolkata, Pune, Nagpur, Ranchi, Bhopal, Nashik</h3>
                </div>
                <div className="section-container" id="chart">
                <Chart
                    options={this.state.options}
                    series={this.state.series}
                    type="bar"
                    width="300"
                    />
                </div>
            </div>
        );
    }
}

export default analyser;