import React from 'react';

function MyNavbar(props) {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <a className="navbar-brand" href="#">Start Boostrap</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link" href="#panel1">{props.h1}</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#services">{props.h2}</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#portfolio">{props.h3}</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#contact">{props.h4}</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
export default MyNavbar;