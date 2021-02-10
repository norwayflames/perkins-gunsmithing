import React, { Component } from 'react';
import '../style/index.css';
import Placeholder from '../components/pictures/PlaceholderPic';

function Pricing() {
    return (
        <div>
            <br></br>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="jumbotron">
                            <h1 className="display-3">
                                <hr className="my-4"></hr>
                                <p>
                                    Pricing
                                </p>
                                <hr className="my-4"></hr>
                            </h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-4">
                        <div class="card">
                            <div class="card-body">
                                <h4 class="card-title">Card title</h4>
                                <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
                                <Placeholder />
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <p>$$$$</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-4">
                        <div class="card">
                            <div class="card-body">
                                <h4 class="card-title">Card title</h4>
                                <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
                                <Placeholder />
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <p>$$$$</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-4">
                        <div class="card">
                            <div class="card-body">
                                <h4 class="card-title">Card title</h4>
                                <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
                                <Placeholder />
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <p>$$$$</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col">
                       
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Pricing;