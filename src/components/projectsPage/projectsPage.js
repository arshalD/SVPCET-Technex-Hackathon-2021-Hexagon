import React, {Component} from 'react';
import "./projectsPage.css"

export class projectsPage extends Component{
    render() { 
        return(
            <div class="assets-container">
                <h1>Projects Manager</h1>

                <div class="section-container">
                    <h3>Project 1</h3>
                    <h3>Status : 86%</h3>
                    <h3>Time Remaining :2 weeks</h3>
                </div>
                <div class="section-container">
                    <h3>Project 2</h3>
                    <h3>Status : 59%</h3>
                    <h3>Time Remaining :3 weeks </h3>
                </div>
                <div class="section-container">
                    <h3>Project 3</h3>
                    <h3>Status : 46%</h3>
                    <h3>Time Remaining :3 weeks</h3>
                </div>
                <div class="section-container">
                    <h3>Project 4</h3>
                    <h3>Status : 77%</h3>
                    <h3>Time Remaining : 1.5 weeks</h3>
                </div>
            </div>
        );
    }
}

export default projectsPage;