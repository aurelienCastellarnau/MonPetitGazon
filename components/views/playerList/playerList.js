'use strict';

import React from 'react';
import {
    View,
    ScrollView
} from 'react-native';
import { PlayerListView, PlayerSearch } from './utils';

class PlayerList extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            isPlayer: false,
            filter : '',
            data: null,
            copyData: null
        };
        this._getPlayerList();
    }

    _getPlayerList = () => {
        fetch('https://api.monpetitgazon.com/stats/championship/1/2018')
            .then(response => response.json())
            .then(responseData => {
                this.setState({
                    data: responseData,
                    copyData: responseData,
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

    filter = (filter) => {
        let data = this.state.data;

        if (filter !== "")
            data = data.filter(word => word.lastname !== undefined ? word.lastname.search(filter) > -1 : null);
        else
            data = this.state.copyData;
        this.setState({
            filter: filter,
            data: data
        });
    };

    _stateRender = () => {
        if (this.state.isPlayer) {
            return (
                <ScrollView style={{ flex: 1 }}>
                    <PlayerSearch onChangeFilter={(filter) => this.setState({ filter: filter })} filter={this.state.filter} />
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