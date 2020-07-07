import React,{Component} from "react"
//import { ReactComponent } from "*.svg"
 import DashBoard from "./DashBoard";
import {Redirect} from "react-router-dom";
class Login extends Component{
    constructor() {
        super();
        this.state = {
           fields: {},
            errors: {}
        };
         this.handleChange = this.handleChange.bind(this);
          this.submitForm = this.submitForm.bind(this)
      }
    handleChange(e) {
          //let fields = this.state.fields;
          //fields[e.target.name] = e.target.value;
          //this.setState({
          //  fields
         // });
         const fields=e.target;
         this.setState({
              [fields]:e.target.value
         })
    
        }
        validateForm() {
            let fields = this.state.fields;
            let errors = {};
            let formIsValid = true;

            if (!fields["username"]) {
              formIsValid = false;
              errors["username"] = "*Please enter your email-ID.";
            }
      
            if (typeof fields["username"] !== "undefined") {
              //reg exp for email validation
              
              let matchcheck=/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
              if (!matchcheck.test(fields["username"])) {
                formIsValid = false;
                errors["username"] = "*Please enter valid email-ID.";
              }
            }

            if (!fields["password"]) {
              formIsValid = false;
              errors["password"] = "*Please enter your password.";
            }
      
            if (typeof fields["password"] !== "undefined") {
              if (!fields["password"] >5){
                formIsValid = false;
                errors["password"] = "*Please enter secure and strong password.";
              }
            }
            this.setState({
              errors: errors
            });
            return formIsValid;
      
      
          }
        submitForm(e) {
          e.preventDefault();
          if (this.validateForm()) {
              let fields = {};
              
             fields["username"] = "";
              fields["password"] = "";
              this.setState({fields:fields});
              if(fields["username"] == "dhanu@gmail.com" && fields["password"] == "dhanu"){
                  return<Redirect to="/Dashboard"/>
                  //alert("Success");
              }
          }
    
        }
        
      render() {
        return (
          <div className="App-Header">
              
          <center> <h3>LOGIN page</h3>
            <form name="LoginForm"  onSubmit= {this.submitForm} >
    
            
          
            <input type="text" name="username" value={this.state.fields.username} onChange={this.handleChange} placeholder="UserName" />
            <div className="errorMsg">{this.state.errors.username}</div>
          
            <br/>
            
            <input type="password" name="password" value={this.state.fields.password} onChange={this.handleChange} placeholder="Password"/>
            <div className="errorMsg">{this.state.errors.password}</div><br/>
            <input type="submit" className="button"  value="Log-In"/>
            </form></center>
          </div>
        
        );
      }
    
}
export default Login
