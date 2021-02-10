import React, { Component } from 'react';
import Snowflake from "../pictures/SnowflakePic";
import Smile from "../pictures/Smile";

function HomeCards() {
    return (
        <div>
            <div className='container'>
                <div className="row">
                    <div className="col-6">
                        <div className="card">
                            <h3 className="card-header">Ugliest Gun I've ever shot.</h3>
                            <h5 className="card-title">The Snowflake</h5>
                            <h6 className="card-subtitle text-muted">As I like to call it.</h6>
                            <div className="card-body">
                                <Snowflake />
                                <p className="card-text">
                                    This special "Snowflake" AR-15 belongs to my son. Not a bad shot but still ugly.
                            </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="card">
                            <h3 className="card-header">The Range</h3>
                            <h5 className="card-title">is where I belong</h5>
                            <h6 className="card-subtitle text-muted">Support card subtitle</h6>
                            <div className="card-body">
                                <Smile />
                                <p className="card-text">
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores culpa architecto soluta in iusto officiis omnis quod odit ipsa dicta animi excepturi accusantium, consequuntur amet consectetur distinctio modi tenetur nisi.
                            </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeCards;