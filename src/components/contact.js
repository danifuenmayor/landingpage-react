import React from 'react';
const Contact = (props) => {
    return (
        <>

            <div className="mx-auto" id="contact">
                <div className="row d-flex justify-content-center">
                    <div className="col-9">
                        <h1>{props.h1}</h1>
                        <p className="text-justify">{props.description}</p>
                    </div>
                </div>


                <div className="card mx-auto col-8" >
                    <div className="row no-gutters bg-light">
                        <div className="col">
                            <div className="card-body">
                                <div className="form-group row">
                                    <label for="inputEmail3" className="col-4 col-form-label d-flex justify-content-end font-weight-bold">{props.email}</label>
                                    <div className="col">
                                        <input type="email" className="form-control col-12" id="inputEmail3" placeholder="Your email" />
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label for="inputcomment" className="col-4 col-form-label d-flex justify-content-end font-weight-bold">{props.message}</label>
                                    <div className="col">
                                        <textarea name="inputcomment" id="inputcomment" className="d-flex justify-content-end col-12" placeholder="Please enter your message here..."></textarea>
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <div className="col d-flex justify-content-end">
                                        <button type="submit" className="btn btn-primary">{props.submit}</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bottom"></div>
        </>
    );
}

export default Contact;