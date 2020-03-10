import React from 'react';

function Panel2(props) {
    return (
        <div className="container" id="second_heading">
            <div className="row">
                <div className="col mb-3">
                    <div className="row p-5">
                        <div className="col-md-4">
                            <img className="rounded-circle" width="250" src={props.imageURL} alt="..." />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h2>{props.heading} <span className="text-muted">{props.heading2}
                                </span></h2>
                                <p>{props.description}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Panel2;