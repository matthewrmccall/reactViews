// import React object from react module
import React from 'react'
import {Link} from 'react-router-dom'
// define a function to render the Home html
function Home(){
    return(
      <React.Fragment>
      <div>Home</div>
      <Link to='/about'>Click here for about</Link>
      </React.Fragment>
  )
}
// expose the function for use elsewhere
export default Home;
