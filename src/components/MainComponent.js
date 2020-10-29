// get the React object from the react module
import React from 'react'
// get header and footer
import Header from './HeaderComponent'
import Footer from './FooterComponent'
// get about and home
import About from './AboutComponent'
import Home from './HomeComponent'
// import modules from react-router-dom
import {Switch, Route, Redirect, withRouter} from 'react-router-dom'
// define a function that returns some html
function Main (){
    return(
        // header and footer should stay the same
        <React.Fragment>
        <Header/>
        <Switch>
        <Route path='/home' component={Home}/>
        <Route path='/about' component={About}/>
        <Redirect to='/home'/>
        </Switch>

        <Footer/>
        </React.Fragment>
    )
}
// expose the Main function to other modules
export default withRouter(Main);
