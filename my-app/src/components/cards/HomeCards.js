import { Exposure } from '@material-ui/icons';
import React, { Component } from 'react';
import Disassembled1 from '../pictures/Disassembled1';
import Disassembled2 from '../pictures/Disassembled2';

function HomeCards() {
    return (
        <div>
            <div className='container'>
                <div className="row">
                    <div className="col-6">
                        <div className="card">
                            <h3 className="card-header">Card header</h3>
                            <h5 className="card-title">Special title treatment</h5>
                            <h6 className="card-subtitle text-muted">Support card subtitle</h6>
                            <div className="card-body">
                                <Disassembled1 />
                                <p className="card-text">
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores culpa architecto soluta in iusto officiis omnis quod odit ipsa dicta animi excepturi accusantium, consequuntur amet consectetur distinctio modi tenetur nisi.
                            </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="card">
                            <h3 className="card-header">Card header</h3>
                            <h5 className="card-title">Special title treatment</h5>
                            <h6 className="card-subtitle text-muted">Support card subtitle</h6>
                            <div className="card-body">
                                <Disassembled2 />
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