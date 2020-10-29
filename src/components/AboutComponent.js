// import React object from react module
import React from 'react'
import {Link} from 'react-router-dom'
// define a function to display the html
function About (){
    return(
      <React.Fragment>
      <div>About</div>
      <Link to='/home'>Click here for home</Link>
      </React.Fragment>
    )
}
// expose the function for use elsewhere
export default About;
