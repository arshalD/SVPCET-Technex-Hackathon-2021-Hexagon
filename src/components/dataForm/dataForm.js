import React, {Component} from 'react';
import "./dataForm.css";

export class dataForm extends Component{
    state = {
        // state to store value from input
        input: "",
        items: []
      };

    render() { 
        return(
            <div class="dataForm-container">
              <h1>Business Manager</h1>
                <div class="dataForm-container">
                  <form class="loginForm" onSubmit={this.storeItems}>
                      <input 
                        type="text" 
                        className="todo-input"
                        value={this.state.input}
                        onChange={this.handleChange}
                        placeholder="User Name"/>
                  </form>
                </div>
                <div class="dataForm-container">
                  <form class="loginForm" onSubmit={this.storeItems}>
                     <input 
                        type="text" 
                        className="todo-input"
                        value={this.state.input}
                        onChange={this.handleChange}
                        placeholder="Password"/>
                  </form>
                </div>

            </div>
        );
    }
}
export default dataForm;