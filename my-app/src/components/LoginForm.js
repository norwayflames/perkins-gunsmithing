import React, { Component } from 'react';
import { Jumbotron } from 'react-bootstrap';
import api from "./utils/api";

class LoginForm extends React.Component {

    handleSubmit = (event) => {
        event.preventDefault();
        console.log("Username: " + event.target.elements.username.value);
        console.log("Password: " + event.target.elements.password.value);

        const userData = {
            username: event.target.elements.username.value,
            password: event.target.elements.password.value
        };
        api.getLogin(userData).then((res) => {
            window.location.href = "/";
        });
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <div className="card">
                                <div className="p-2 m-2 usernameinput">
                                    <label>
                                        Username:
                                        <input
                                            type="text"
                                            name="username"
                                            ref={(node) => (this.inputNode = node)}
                                        />
                                    </label>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <div className="card">
                                        <div className="p-2 m-2 passwordinput">
                                            <label>
                                                Password:
                                            <input
                                                    type="password"
                                                    name="password"
                                                    ref={(node) => (this.inputNode = node)}
                                                />
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <div className="card">
                                        <div className="p-2 m-2 loginbutton">
                                            <button type="submit" class="btn btn-dark my-2 my-sm-0">
                                                Submit </button>
                                        </div>
                                    </div>
                                    <br></br>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        )
    }
}

export default LoginForm;