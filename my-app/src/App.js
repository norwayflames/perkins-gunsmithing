import React, { Component } from 'react';
import {
    Router,
    Switch,
    Route,
    Link,
    Redirect
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import Pricing from "./pages/Pricing";
import Login from "./pages/Login";
import About from "./pages/About";
import SignUp from "./pages/SignUp";
import Contact from "./pages/Contact";
import history from './history';
import Footer from "./components/footer/Footer";
import './style/index.css';


class App extends Component {
    render() {
        return (
            <div className="App">
                <Router history={history}>
                    <nav className="navbar navbar-expand-lg navbar-dark bg-primary justify-content-center">
                        <div className="container">
                            <Link className="navbar-brand" to="/">
                                Home
                        </Link>
                        </div>
                        <div className="container">
                            <Link className="navbar-brand" to="/about">
                                About
                        </Link>
                        </div>
                        <div className="container">
                            <Link className="navbar-brand" to="/pricing">
                                Pricing
                        </Link>
                        </div>
                        <div className="container">
                            <Link className="navbar-brand" to="/login">
                                Login
                        </Link>
                        </div>
                    </nav>
                </Router>
                <Router history={history}>
                    <Switch>
                        <Route exact path="/" exact component={HomePage}>
                        </Route>
                        <Route path="/about" component={About}>
                        </Route>
                        <Route path="/pricing" component={Pricing}>
                        </Route>
                        <Route path="/login" component={Login}>
                        </Route>
                        <Route path="/signup" exact component={SignUp}>
                        </Route>
                        <Route path="/contact" exact component={Contact}>
                        </Route>
                        <Route path="/" exact component={Footer} />
                    </Switch>
                </Router>
                <Footer />
            </div>
        );
    }
};

export default App;
