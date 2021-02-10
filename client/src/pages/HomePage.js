import React, { Component } from 'react';
import HomeCards from '../components/cards/HomeCards';
import Jumbotron from '../components/Jumbotron';



class Index extends Component {
    render() {
        return (
            <div>
                <br></br>
                <Jumbotron />
                <HomeCards />
                <br></br>
            </div>
        )
    }
}

export default Index;