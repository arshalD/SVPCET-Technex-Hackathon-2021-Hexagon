import React, {Component} from 'react';
import "./loginPage.css";
var dbData; 

   async function dataCall(){
     let req = new XMLHttpRequest();
  
      req.onreadystatechange = () => {
      if (req.readyState == XMLHttpRequest.DONE) {
          dbData=JSON.parse(req.responseText);
           
      }
    };
  
    req.open("GET", "https://api.jsonbin.io/b/600acb4bbca934583e4037be", true);
    req.setRequestHeader("secret-key", "$2b$10$Ro.izxrzqvtFbz2XFF6S0ee4zJ3Jvc5XL3tFW97KdnDgaHtKAQQo2");
    await req.send();
    }

export class loginPage extends Component{
    state = {
        // state to store value from input
        username: "",
        password: ""
    };
    
    value=dataCall();
    handleChange = event => {
        // function to get data(task) from the user
        this.setState({
            [event.target.name]: event.target.value
        });
        
      }; 

    loginFn = ()=>{
        var name=dbData.name;
        var pswd=dbData.password;
        if(this.state.username==name && this.state.password==pswd){
            alert("success");
        }
        else{
            alert("Wrong Username or Password");
        }
    }
    render() { 
        const {username, password} = this.state;
        return(
            <div class="loginPage-container">
              <h1>Business Manager</h1>
                <div class="loginBox-container">
                      <input 
                        type="text" 
                        className="todo-input"
                        name="username"
                        value={username}
                        onChange={this.handleChange}
                        placeholder="User Name"/>
                     <input 
                        type="text" 
                        className="todo-input"
                        name="password"
                        value={password}
                        onChange={this.handleChange}
                        placeholder="Password"/>
                    <button onClick={()=>this.loginFn()}>Log in</button>    
                </div>
                  Sign up ?
            </div>
        );
    }
}
export default loginPage;