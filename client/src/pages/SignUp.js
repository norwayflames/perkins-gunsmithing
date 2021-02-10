import React, { Component } from "react";
import api from "../components/utils/api";

class SignUp extends React.Component {
    handleSubmit = (event) => {
        event.preventDefault();
        console.log("Name: " + event.target.elements.name.value);
        console.log("Username: " + event.target.elements.username.value);
        console.log("Email: " + event.target.elements.email.value);
        console.log("Password: " + event.target.elements.password.value);

        const userData = {
            name: event.target.elements.name.value,
            username: event.target.elements.username.value,
            email: event.target.elements.email.value,
            password: event.target.elements.password.value
        };
        api.signUp(userData).then((res) => {
            window.location.href = "/login";
        });
    };
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <br></br>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <div className="jumbotron">
                                <h1>Sign Up</h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <div className="card">
                                <div className="p-2 m-2 nameinput">
                                    <label>
                                        Name:
                                    <input
                                            type="text"
                                            name="name"
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
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <div className="card">
                                <div className="p-2 m-2 emailinput">
                                    <label>
                                        Email:
                                    <input
                                            type="text"
                                            name="email"
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
                                <div className="p-2 m-2 passswordinput">
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
                                <div className="p-2 m-2 signupbutton">
                                    <button type="submit" class="btn btn-dark my-2 my-sm-0">Submit</button>
                                </div>
                                <div className="p-2 m-2 link">
                                    <a href="/login">Already have an account? Login here!</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <br></br>
            </form>
        );
    }
}

export default SignUp;