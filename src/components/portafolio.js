import React from 'react';
const Portafolio = (props) => {
  return (
    <>
      <div className="container" id="portfolio">
        <div className="row">
          <div className="col">
            <form>
              <h1>{props.h1}</h1>
              <p> {props.description}</p>
              <div className="card">
                <div className="card-deck">
                  <div className="card">
                    <img src={props.imgURL} className="card-img-top" alt="..." />
                    <div className="card-body">
                      <h5 className="card-title text-primary text-primary">{props.name}</h5>
                      <p className="card-text">{props.description2}</p>
                    </div>
                  </div>
                  <div className="card">
                    <img src={props.imgURL} className="card-img-top" alt="..." />
                    <div className="card-body">
                      <h5 className="card-title text-primary text-primary">{props.name}</h5>
                      <p className="card-text">{props.description2}</p>
                    </div>
                  </div>
                  <div className="card">
                    <img src={props.imgURL} className="card-img-top" alt="..." />
                    <div className="card-body">
                      <h5 className="card-title text-primary text-primary">{props.name}</h5>
                      <p className="card-text">{props.description2}</p>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Portafolio;