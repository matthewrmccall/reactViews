// get the React object from the react module
import React from 'react'
// get header and footer
import Header from './HeaderComponent'
import Footer from './FooterComponent'
// define a function that returns some html
function Main (){
    return(
        <React.Fragment>
        <Header/>
        <div>Hello World</div>
        <Footer/>
        </React.Fragment>
    )
}
// expose the Main function to other modules
export default Main;
