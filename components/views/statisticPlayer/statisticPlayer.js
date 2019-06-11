'use strict';

import React from 'react';
import {
    View
} from 'react-native';
import { HeaderStatisticPlayer, PlayerStatistic } from './utils';

class StatisticPlayer extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            player: this.props.navigation.state.params.player
        };
        console.log(this.state.player);
    }

    _generateHeader = () => {
        let HeaderString = "";

        if (this.state.player.firstname !== null)
            HeaderString = this.state.player.firstname+" ";
        if (this.state.player.lastname !== null)
            HeaderString += this.state.player.lastname;

        return (HeaderString);
    };

    render() {
        return (
            <View style={{ flex: 1 }}>
                <HeaderStatisticPlayer headerName={this._generateHeader()} returnList={() => this.props.navigation.navigate('PlayerList')} />
                <PlayerStatistic player={this.state.player} />
            </View>
        )
    }
}


export default (StatisticPlayer);