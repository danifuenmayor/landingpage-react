import React from 'react';
import ReactDOM from 'react-dom';

// Add css files
import 'bootstrap/dist/css/bootstrap.min.css'; // CSS from Bootstrap
import '@fortawesome/fontawesome-free/css/all.css'; // CSS from FontAwesome
import './index.css'; // My own CSS

// Add js files
import 'jquery';
import 'popper.js';
import 'bootstrap';
import Contact from './componentes/contact';
import Portafolio from './componentes/portafolio';

const Home = (props) => {
    return (
      <>
      <Portafolio/>
      <br/>
      <Contact/>
      </>
    )
}

ReactDOM.render(<Home />, document.querySelector("#root"));