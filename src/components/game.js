import React, { Component } from 'react';
import Keyboard from './keyboard';
import HiddenWord from './hidden_word';

export default class Game extends Component {
    handlePress(letter) {
        if (this.props.keyboardEnabled) {
            this.props.onKeyBoardPress(letter);
        }
    }

    handleNewGame() {
        this.props.onButtonClick();
    }

    displayMessage(won, over) {
        if (won && !over) {
            return <h4 className="text-success"><strong>CONGRATULATIONS... YOU ARE AWESOME !!</strong></h4>;
        }
        else if (!won && over) {
            return <h4 className="text-danger"><strong>GAME OVER... PLEASE TRY AGAIN !!</strong></h4>
        }
        else {
            return <h4 style={{ color: "#019e93", display: this.props.over && this.props.won ? 'none' : 'block' }}><strong>Total   <span style={{ fontSize: '1em' }} className="btn btn-sm btn-info"><strong>{this.props.turnsleft}</strong></span>   incorrect tries before you prove YOU ARE AWESOME !!</strong></h4>
        }
    }

    render() {

        return (
            <div>
                <div id="gamedesc">
                    <p><strong>Guess the word.... Tough job ?? Okay, Below is an hint. </strong></p>
                    <h5><strong>P.S. - You will get another hint after 5 incorrect tries.</strong></h5>
                    <div>
                        {this.displayMessage(this.props.won, this.props.over)}
                    </div>
                </div>

                <div className="row" id="gamelayout">
                    <div className="col-sm-12">
                        <div id="hints" style={{ paddingTop: '1em', paddingBottom: '10%' }}>
                            <div className="col-sm-2"><h5><strong><span className="text-default">Hint : </span></strong></h5></div>
                            <div className="col-sm-10"><h5><strong><span className="text-default">{this.props.word.hint_one}</span></strong></h5></div>
                            <div style={{ display: (this.props.turnsleft <= 1) ? 'block' : 'none' }} className="text-danger">
                                <div className="col-sm-3"><h5><strong><span className="text-default">Another Hint : </span></strong></h5></div>
                                <div className="col-sm-9"><h5><strong><span className="text-default">{this.props.word.hint_two}</span></strong></h5></div>
                            </div>
                        </div>
                        <div>
                            <HiddenWord style={{ paddingTop: '5%' }}
                                word={this.props.word.word_name}
                                reveal={this.props.over}
                                guesses={this.props.guesses} />
                            <div className="col-sm-9">
                                <Keyboard
                                    onPress={this.handlePress.bind(this)}
                                    enabled={this.props.keyboardEnabled}
                                    disabledLetters={this.props.guesses} />
                            </div>
                            <div className="col-sm-3">
                                <button style={{ marginTop: '70%' }}
                                    className={this.props.classText}
                                    disabled={!this.props.over && !this.props.won}
                                    onClick={this.handleNewGame.bind(this)}>
                                    New Game
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}