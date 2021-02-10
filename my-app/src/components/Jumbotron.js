import React, { Component } from 'react';
import '../style/index.css';
import GunLogo from "../res/GunLogo.png";
import GunLogo2 from "../res/GunLogo2.png";
import { Button } from 'react-bootstrap';
import history from './../history';

function contactBtn() {
    history.push('/contact')
}

function Jumbotron() {
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="jumbotron">
                            <h1 className="display-3">
                                <img style={{ height: 75, paddingRight: 20, }} src={GunLogo} ></img>
                                Perkins Gunsmithing
                                <img style={{ height: 75, paddingLeft: 20, }} src={GunLogo2} ></img>
                            </h1>
                            <p className="lead">Local gunsmith with a FFL and over 20 years experience providing gun care needs.</p>
                            <hr className="my-4"></hr>
                            <p>Cleaning - Maintenance - Restoration - Custom Build Services
                                </p>
                            <p>If I can't find the part needed, I'll make it myself.
                                </p>
                                <br></br>
                            <p className="lead">
                            <Button onClick={contactBtn} className="btn btn-primary btn-lg">
                                    Contact Me
                                </Button>
                            </p>
                            <hr class="my-4"></hr>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Jumbotron;