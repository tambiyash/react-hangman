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
                <form id="form-login" className="input-lg col-xs-12" onSubmit={this.handleSubmit.bind(this)}>
                    <div className="input-lg col-xs-6"><input className="form-control" ref="mail" type="email" id="input" required placeholder="username@example.com" /></div>
                    <div className="input-lg col-xs-2"><button type="Submit" ref="startgame" className="btn btn-danger"><strong>Enter the ARENA !!</strong></button></div>
                </form>
            </div>
        );
    }
}