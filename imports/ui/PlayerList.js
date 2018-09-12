import React from 'react';
import Player from './Player';
import FlipMove from 'react-flip-move'; // for list animations

export default class PlayersList extends React.Component {
    renderPlayers() {
        return this.props.players.map((player) => {
            return <Player key={player._id} player={player}/>
        });
    }
    render() {
        return (
            <div>
                <FlipMove maintainContainerHeight={true}>
                    {this.props.players.length ?
                        this.renderPlayers() :
                        <div className='item'>
                            <p className='item__message'>Add your first player to get started!</p>
                        </div>
                    }
                </FlipMove>
            </div>
        );
    }
};

PlayersList.propTypes = {
    players: React.PropTypes.array.isRequired
};