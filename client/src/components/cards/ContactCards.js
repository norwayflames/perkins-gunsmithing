import React, { Component } from 'react';

function ContactCards() {
    return (
        <div className="row">
            <div className="col">
                <div>
                    <div className="card border-secondary mb-3">
                        <div className="card-header">Call Me</div>
                        <div className="card-body">
                            <h4 className="card-title">8 am - 5 pm</h4>
                            <p className="card-text">(970) 618-3546</p>
                            <h4>MST</h4>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col">
                <div>
                    <div className="card border-secondary mb-3">
                        <div className="card-header">Email</div>
                        <div className="card-body">
                            <h4 className="card-title">Anytime</h4>
                            <p className="card-text">bperkins2@comcast.net</p>
                            <h4>I'll reply as soon as possible</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactCards;