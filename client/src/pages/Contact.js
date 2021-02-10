import React, { Component } from 'react';
import '../style/index.css';
import { withRouter } from 'react-router-dom';
import ContactCards from '../components/cards/ContactCards'
import Rifle from '../components/pictures/RiflePic'

class Contact extends Component {
    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <br></br>
                            <div className="jumbotron">
                                <h2>
                                    Contact Me
                                </h2>
                            </div>
                            <br></br>
                        </div>
                    </div>
                    <ContactCards />
                </div>
                <br></br>
            </div>
        )
    }
}


export default withRouter(Contact);