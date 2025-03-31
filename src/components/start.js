import React, { Component } from 'react';

export default class StartUser extends Component {
    handleSubmit(e) {
        e.preventDefault();
        this.props.handleSubmit(this.refs.mail.value);
    }

    render() {
        return (
            <div id="hangmandesc" className="container">
                <h1>Hangman is the game we all loved in our childhood.</h1>
                <br />
                <h4>Enter email address to continue !! <span className="text-primary">#BeingNostalgic</span></h4>
                <form id="form-login" className="input-lg col-xs-12 col-sm-6 col-md-3 col-lg-2" onSubmit={this.handleSubmit.bind(this)}>
                    <div className="input-lg col-xs-6 col-xs-offset-3 col-sm-4 col-sm-offset-2 col-md-2 col-md-offset-1 col-lg-1">
                        <input className="form-control" ref="mail" type="email" id="input" required placeholder="Enter email" />
                    </div>
                    <div className="input-lg col-xs-4 col-xs-offset-4 col-sm-2 col-sm-offset-2 col-md-1 col-md-offset-2">
                        <button type="Submit" ref="startgame" className="btn btn-danger">
                            <strong>Enter the ARENA !!</strong>
                        </button>
                    </div>
                </form>
            </div>
        );
    }
}