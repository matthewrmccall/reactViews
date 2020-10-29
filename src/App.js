// import React object from react module
import React from 'react';
// import Main function from MainComponent.js
import Main from './components/MainComponent'
// import BrowserRouter from router package
import {BrowserRouter} from 'react-router-dom'

function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Main/>
    </BrowserRouter>
    </div>
  );
}

export default App;
