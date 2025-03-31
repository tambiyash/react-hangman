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
                <form id="form-login" className="" onSubmit={this.handleSubmit.bind(this)}>
                    <div className="">
                        <input className="form-control" ref="mail" type="email" id="input" required placeholder="Enter email" />
                    </div>
                    <div className="">
                        <button type="Submit" ref="startgame">
                            <strong>Enter the ARENA !!</strong>
                        </button>
                    </div>
                </form>
            </div>
        );
    }
}