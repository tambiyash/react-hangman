import React, { Component } from 'react';
import _ from 'underscore';

const ROW_ONE = 'abcdefghijklm'.split('');
const ROW_TWO = 'nopqrstuvwxyz'.split('');

export default class Keyboard extends Component {

    handleClick(letter) {
        if (this.props.enabled) {
            this.props.onPress(letter);
        }
    }

    render() {
        return (
            <div className='hangman-keyboard'>
                {[ROW_ONE, ROW_TWO].map(row => {
                    return (
                        <div className='button-row' key={row.join('')}>
                            {row.map(letter => {
                                let disabled = _.includes(this.props.disabledLetters, letter);
                                return (
                                    <button
                                        key={letter}
                                        onClick={this.handleClick.bind(this, letter)}
                                        disabled={disabled}>
                                        {letter}
                                    </button>
                                );
                            })}
                        </div>
                    );
                })}
            </div>
        );
    }
}
