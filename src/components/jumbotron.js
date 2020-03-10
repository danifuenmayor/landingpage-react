import React from 'react';

function MyJumbotron(props) {
    return (
        <>
            <div className="card bg-white text-white">

                <img className="card-img" src={props.imgURL} />
                <div className="card-img-overlay">

                    <h1 className="card-title bg-white text-dark mt-5 text-center font-weight-bold display-1">{props.h1}</h1>

                    <h2 className="card-title bg-white text-dark text-center font-weight-bold display-4">{props.h2}</h2>

                </div>
            </div>
        </>
    );
}
export default MyJumbotron;