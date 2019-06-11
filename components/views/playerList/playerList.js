'use strict';

import React from 'react';
import {
    View,
    ScrollView
} from 'react-native';
import { PlayerListView } from './utils';

class PlayerList extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            isPlayer: false
        };
        this._getPlayerList();
    }

    _getPlayerList = () => {
        fetch('https://api.monpetitgazon.com/stats/championship/1/2018')
            .then(response => response.json())
            .then(responseData => {
                this.setState({
                    data: responseData,
                    isPlayer: true
                })
            })
            .catch( (e) => {
                console.log('Error on request', e) // Action d'érreur à faire
            })
    };

    _playerStatistic = (v) => {
        this.props.navigation.navigate('StatisticPlayer', {
            player: v
        })
    };

    _stateRender = () => {
        if (this.state.isPlayer) {
            return (
                <ScrollView style={{ flex: 1 }}>
                    <PlayerListView data={this.state.data} onClickPlayer={(v) => this._playerStatistic(v)} />
                </ScrollView>
            )
        } else {
            return (
                <View /> // loader dans le futur
            )
        }
    };

    render() {
        return (
            this._stateRender()
        )
    }
}


export default (PlayerList);