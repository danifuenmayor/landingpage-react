import React from 'react';
import ReactDOM from 'react-dom';
import MyNavbar from './components/navbar';
import MyJumbotron from './components/jumbotron';

// Add css files
import 'bootstrap/dist/css/bootstrap.min.css'; // CSS from Bootstrap
import '@fortawesome/fontawesome-free/css/all.css'; // CSS from FontAwesome
import './index.css'; // My own CSS

// Add js files
import 'jquery';
import 'popper.js';
import 'bootstrap';

import Contact from './components/contact';
import Portafolio from './components/portafolio';
import Panel1 from './components/panel1';
import Panel2 from './components/panel2';

const Home = (props) => {
    return (
        <>
            <MyNavbar h1="About" h2="Services" h3="Portfolio" h4="Contact" />
            <MyJumbotron imgURL="../src/img/bg.jpg" h1="One Page Wonder" h2="Will knock Your Socks Off" />
            <Panel1 heading="The First Heading" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum error ut magnam temporibus.
                    Asperiores dignissimos repellendus error voluptas, obcaecati molestiae suscipit modi illo sed
                    aspernatur. Labore eius nulla sequi harum." heading2="Will Catch Your Eye" imageURL="../src/img/1.jpg" />
            <Panel2 heading="The Second Heading" heading2="Is Pretty Cool Too" description="Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                                    Voluptates dolor minus sed temporibus quidem itaque beatae expedita vel fuga quam
                                    pariatur vero facilis quasi, reprehenderit, incidunt repellendus, facere repudiandae
                            ipsa?" imageURL="../src/img/2.jpg" />
            <Portafolio h1="Portfolio" description="Donec sed odio dui. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Praesent commodo cursus magna, vel scelerisque nisl consectetur et." imgURL="http://placehold.it/700x400?" name="Project name" description2="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua" />
            <Contact h1="Contact" description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex in velit voluptas consequatur est
                            dolorum
                            adipisci ipsa deserunt, officiis rem qui voluptatibus aut reiciendis debitis dolor mollitia laborum
                            impedit
                    deleniti." email="Your E-mail" message="Your Message" submit="Submit" />

        </>
    );
}

ReactDOM.render(<Home />, document.querySelector("#root"));
