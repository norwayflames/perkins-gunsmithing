import React, { Component } from 'react';
import '../style/index.css';
import LoginForm from "../components/LoginForm";
import { Button } from 'react-bootstrap';
import history from '../history';

function signUpBtn() {
    history.push('/signup')
}

function Login() {
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <br></br>
                        <div className="jumbotron">
                            <h3>
                                Returning Customer?
                            </h3>
                            <p className="lead">Put in your email and password below.</p>
                            <hr className="my-4"></hr>
                            <p>Don't have an account?</p>
                            <p className="lead">
                            <Button onClick={signUpBtn}>Sign Up</Button>
                            </p>
                            <h6 className="text-muted">Your info is not shared with anyone.</h6>
                            <hr className="my-4"></hr>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <LoginForm />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;