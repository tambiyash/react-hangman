import React, { Component } from 'react';
import _ from 'underscore';

export default class HiddenWord extends Component {

    getSlots() {
        let letters = this.props.word.split('');
        return letters.map((letter, index) => {
            let guesses = this.props.guesses;
            let reveal = this.props.reveal;
            let classNames = ['letter-slot'];
            let contents = _.contains(guesses, letter) ? letter : ' ';

            if (contents === ' ' && reveal) {
                classNames.push('revealed');
                contents = letter;
            }

            return (
                <div key={index} className={classNames.join(' ')}>
                    {contents}
                </div>
            );
        });
    }

    render() {
        let {reveal, guesses} = this.props;
        let letters = this.props.word.split('');
        let letterslots = letters.map((letter, index) => {
            let classNames = ['letter-slot'];
            let contents = _.contains(guesses, letter) ? letter : ' ';

            if (contents === ' ' && reveal) {
                classNames.push('revealed');
                contents = letter;
            }
            return (
                <div key={index} className={classNames.join(' ')}>
                    {contents}
                </div>
            );            
        });
        return (
            <div className='letter-slots'>
                {letterslots}
            </div>
        );
    }
};
