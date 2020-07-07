import React from "react"
import {Router,Route,Switch,Link} from "react-router-dom"
function DashBoard(){
    return(
    <div>
<h3 style={{color:"gray"}}>DashBoard</h3>
      <Router>
          <Link to="/">Menu</Link>
          <Link to="/About">About Us</Link>


          <Switch>
              <Route path="/">Menu</Route>
              <Route path="/About">About Us</Route>
          </Switch>
      </Router>
    </div>
    )
}
export default DashBoard