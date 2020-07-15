import React, { Component } from 'react';

export default class PlayerScore extends Component {

    render() {
        let players;
        if (this.props.players) {
            players = this.props.players.map(player => {
                return (
                    <tr key={player.username} ref={player.username}>
                        <td>{player.username}</td>
                        <td>{player.score}</td>
                    </tr>
                );
            });
        }
        return (
            <div>
                <div>
                    <h2>Scores:</h2>
                </div>
                <div>
                    <table className="table table-condensed table-bordered table-hover">
                        <thead className="thead-inverse">
                            <tr>
                                <th>Username</th>
                                <th>Score</th>
                            </tr>
                        </thead>
                        <tbody>
                            {players}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}