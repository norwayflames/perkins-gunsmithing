import React, { Component } from 'react';
import SnowflakePic from '../pictures/SnowflakePic';
import Smile from '../pictures/Smile';


function AboutCards() {
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <div className="card">
                            <h3 className="card-header">Card header</h3>
                            <h5 className="card-title">Special title treatment</h5>
                            <SnowflakePic />
                            <br></br>
                            <h6 className="card-subtitle text-muted">Support card subtitle</h6>
                            <div className="card-body">
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of
                                the card's content.</p>
                            </div>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">Cras justo odio</li>
                                <li className="list-group-item">Dapibus ac facilisis in</li>
                                <li className="list-group-item">Vestibulum at eros</li>
                            </ul>
                            <div className="card-body">
                                <a href="#" class="card-link">Card link</a>
                                <a href="#" className="card-link">Another link</a>
                            </div>
                            <div className="card-footer text-muted">
                                By Brian Perkins
                    </div>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="card">
                            <h3 className="card-header">Card header</h3>
                            <h5 className="card-title">Special title treatment</h5>
                            <Smile />
                            <br></br>
                            <h6 className="card-subtitle text-muted">Support card subtitle</h6>
                            <div className="card-body">
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of
                                the card's content.</p>
                            </div>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">Cras justo odio</li>
                                <li className="list-group-item">Dapibus ac facilisis in</li>
                                <li className="list-group-item">Vestibulum at eros</li>
                            </ul>
                            <div className="card-body">
                                <a href="#" class="card-link">Card link</a>
                                <a href="#" className="card-link">Another link</a>
                            </div>
                            <div className="card-footer text-muted">
                                By Brian Perkins
                    </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutCards;