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
import Panel1 from '../components/panel1';
import Panel2 from '../components/panel2';

const Home = (props) => {
    return (
        <>
        <MyNavbar />
        <MyJumbotron />
        <Panel1 heading="The First Heading" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum error ut magnam temporibus.
                    Asperiores dignissimos repellendus error voluptas, obcaecati molestiae suscipit modi illo sed
                    aspernatur. Labore eius nulla sequi harum." heading2="Will Catch Your Eye" imageURL="../src/img/1.jpg"/>
        <Panel2 heading="The Second Heading" heading2="Is Pretty Cool Too" description="Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                                    Voluptates dolor minus sed temporibus quidem itaque beatae expedita vel fuga quam
                                    pariatur vero facilis quasi, reprehenderit, incidunt repellendus, facere repudiandae
                            ipsa?" imageURL="../src/img/2.jpg"/>
        </>
    );
}

ReactDOM.render(<Home />, document.querySelector("#root"));
