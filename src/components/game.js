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
            return (
                <h4 style={{ color: "#019e93", display: this.props.over && this.props.won ? 'none' : 'block' }}>
                    <strong>Total   
                        <span style={{ fontSize: '1em' }} className={this.props.turnsleft === 1 ? "btn-danger" : "btn-info"}>
                            <strong>{this.props.turnsleft}</strong>
                        </span>   incorrect tries before you prove YOU ARE AWESOME !!
                    </strong>
                </h4>
            );
        }
    }

    render() {

        return (
            <div className="game-container">
                <div id="gamedesc">
                    <p><strong>Guess the word.... Tough job ?? Okay, Below is an hint. </strong></p>
                    <h5><strong>P.S. - You will get another hint after 5 incorrect tries.</strong></h5>
                    <div>
                        {this.displayMessage(this.props.won, this.props.over)}
                    </div>
                </div>

                <div className="row" id="gamelayout">
                    <>
                        <div id="hints">
                            <h5><strong><span className="text-default">Hint : </span></strong></h5>
                            <h5><strong><span className="text-default">{this.props.word.hint_one}</span></strong></h5>
                            <div style={{ display: (this.props.turnsleft <= 1) ? 'block' : 'none' }} className="text-danger">
                                <h5><strong><span className="text-default">Another Hint : </span></strong></h5>
                                <h5><strong><span className="text-default">{this.props.word.hint_two}</span></strong></h5>
                            </div>
                        </div>
                        <>
                            <HiddenWord style={{ paddingTop: '5%' }}
                                word={this.props.word.word_name}
                                reveal={this.props.over}
                                guesses={this.props.guesses} />
                            <Keyboard
                                onPress={this.handlePress.bind(this)}
                                enabled={this.props.keyboardEnabled}
                                disabledLetters={this.props.guesses} />
                        
                            <button
                                className={this.props.classText}
                                disabled={!this.props.over && !this.props.won}
                                onClick={this.handleNewGame.bind(this)}>
                                New Game
                            </button>
                        </>
                    </>
                </div>
            </div>
        );
    }
}