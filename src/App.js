import React, { Component } from 'react';
import Game from './components/game';
import StartUser from './components/start';
import PlayerScore from './components/playerscore';
import words from './data/words';
import playersdata from './data/players';
import _ from 'underscore';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            word: {},
            strikes: 0,
            guesses: [],
            over: false,
            won: false,
            players: {},
            currentPlayer: "",
            active: true,
            finish: false
        };
    }

    componentDidMount() {
        this.newGameUI();
        if (this.state.word === undefined) {
            this.setState({ finish: true });
        }
    }

    newGameUI = () => {
        let shuffwords = _.shuffle(words);
        let word = _.find(shuffwords, item => { return item.status === 1 });
        if (_.isEmpty(word)) {
            word = false;
        }
        let strikes = 6;
        let guesses = [];
        let over = false;
        let won = false;
        let players = playersdata;
        let currentPlayer = "";
        let active = true;
        let finish = false;
        console.log(this.state);
        this.setState({ word, strikes, guesses, over, won, players, currentPlayer, active, finish });
    }

    hasWon = () => {
        let {word, guesses} = this.state;
        return !_.chain(word.word_name.split(''))
            .map(letter => _.contains(guesses, letter))
            .contains(false)
            .value();
    }

    newWord = () => {
        const word = this.state.word;
        word.status = 0;
        this.setState({ word: word });
    }

    checkLetter = (letter) => {
        let {word, strikes, guesses, over, won} = this.state;
        if (_.contains(word.word_name, letter)) {

        }
        else {
            strikes--;
        }

        guesses.push(letter);
        won = this.hasWon();

        if (strikes <= 0 && !won) {
            strikes = 0;
            over = true;
            this.newWord();
        }

        if (won) {
            this.newWord();
            let players = this.state.players;
            _.map(players, item => {
                if (item.username === this.state.currentPlayer) {
                    item.score += 30;
                }
            });
            this.setState({ players: players });
        }

        this.setState({ strikes, guesses, over, won });
    }

    handleFormSubmit = (mail) => {
        let {players, active, currentPlayer} = this.state;
        _.forEach(players, (item) => {
            if (item.username !== mail) {
                let player = {
                    username: mail,
                    score: 0
                };
                players.push(player);
                currentPlayer = mail;
            }
            else {
                currentPlayer = item.username;
            }
        });
        active = !active;
        this.setState({ players, active, currentPlayer });
    }

    render() {
        let playing = (!this.state.over && !this.state.won) ? 'new-game' : 'new-game-shown';
        return (
            <div className="container">
                {!this.state.word ?
                    <section>
                        <h1>Words Exhausted. Thank You for playing !!</h1>
                    </section> :
                    (this.state.active ?
                        <div className="row">
                            <div id="gamesection" className="col-sm-12">
                                <StartUser ref='form' handleSubmit={this.handleFormSubmit} />
                            </div>
                        </div> :
                        <div className="row">
                            <div className="container">
                                <div id="gamesection" className="col-sm-8">
                                    <Game
                                        word={this.state.word}
                                        over={this.state.over}
                                        won={this.state.won}
                                        keyboardEnabled={!this.state.over && !this.state.won}
                                        guesses={this.state.guesses}
                                        onKeyBoardPress={this.checkLetter}
                                        classText={playing}
                                        turnsleft={this.state.strikes}
                                        onButtonClick={this.newGameUI}
                                    />
                                </div>
                                <div id="playersection" className="col-sm-4">
                                    <PlayerScore players={this.state.players} />
                                </div>
                            </div>
                        </div>)
                }
            </div>
        );
    }
};