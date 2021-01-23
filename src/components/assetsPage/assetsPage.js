import React, {Component} from 'react';
import "./assetsPage.css"

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

class assetsPage extends Component{
    render() { 
        return(
            <div className="assets-container">
                <h1>Assets Manager</h1>

                <div className="section-container">
                    <h3>Capital: 7.88 Cr</h3>
                    <h3>Investments: 5.9 Cr</h3>
                    <h3>Debts: 4.6 Cr</h3>
                </div>
                <div class="section-container">
                    <h3>Finished Products :35006 </h3>
                    <h3>Status : 86% complete</h3>
                    <h3>Time Remaining : 2 weeks</h3>
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
            </div>
        );
    }
}

export default assetsPage;