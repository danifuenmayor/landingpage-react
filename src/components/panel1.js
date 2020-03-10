import React from 'react';

function Panel1(props) {
    return (
        <div className="container">
            <div className="row">
                <div className="col-8 p-5">
                    <h2>{props.heading} <span class="text-secondary">{props.heading2}</span></h2>
                    <p>{props.description}</p>
                </div>
                <div className="col-4 p-5">
                    <img className="rounded-circle" width="250" src={props.imageURL} alt="Breaking Bad Image"/>
                </div>
            </div>
        </div>

    )
}

export default Panel1;