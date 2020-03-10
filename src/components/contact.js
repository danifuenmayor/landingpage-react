import React from 'react';
const Contact = () => {
    return (
        <>
        
            <div className="mx-auto" >
                <div className="row d-flex justify-content-center">
                    <div className="col-9">
                        <h1>Contact</h1>
                        <p className="text-justify">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex in velit voluptas consequatur est
                            dolorum
                            adipisci ipsa deserunt, officiis rem qui voluptatibus aut reiciendis debitis dolor mollitia laborum
                            impedit
                    deleniti.</p>
                    </div>
                </div>


                <div className="card mx-auto col-8" >
                    <div className="row no-gutters bg-light">
                        <div className="col">
                            <div className="card-body">
                                <div className="form-group row">
                                    <label for="inputEmail3" className="col-4 col-form-label d-flex justify-content-end font-weight-bold">Your E-mail</label>
                                    <div className="col">
                                        <input type="email" className="form-control col-12" id="inputEmail3" placeholder="Your email" />
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label for="inputcomment" className="col-4 col-form-label d-flex justify-content-end font-weight-bold">Your Message</label>
                                    <div className="col">
                                        <textarea name="inputcomment" id="inputcomment" className="d-flex justify-content-end col-12" placeholder="Please enter your message here..."></textarea>
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <div className="col d-flex justify-content-end">
                                        <button type="submit" className="btn btn-primary">Submit</button>
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