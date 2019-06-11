import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import PlayerList from "./components/views/playerList/playerList";
import StatisticPlayer from "./components/views/statisticPlayer/statisticPlayer";

const Application = createStackNavigator({
        PlayerList: { screen: PlayerList },
        StatisticPlayer: { screen: StatisticPlayer }
    },
    {
        headerMode: 'none',
    });
const AppContainer = createAppContainer(Application);

class App extends React.Component {

    render() {
        return (
            <AppContainer />
        )
    }
}

export default (App);