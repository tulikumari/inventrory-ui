import React, { Component } from "react";
import { BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams } from "react-router-dom";
import Home from "../../Screens/home";
import ManageTypes from "../../Screens/manageTypes";
import AddTypes from "../../Screens/AddTypes";

class Routermain extends Component {
    render() {
        return (
            
                <Router>
                     <Route exact path="/" component={Home} />
                     <Route exact path="/manageTypes" component={ManageTypes} />  
                     <Route exact path="/addType/:id" url="/addType/id" component={AddTypes} />  
                </Router>
                
            
        )
    }
}
export default Routermain; 