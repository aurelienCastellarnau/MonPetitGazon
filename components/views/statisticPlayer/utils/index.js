import React from 'react';
import {
    Text,
    Button,
    View,
    TouchableOpacity,
    Image,
    ScrollView,
    ImageBackground,
    TextInput,
    AsyncStorage
} from 'react-native';
import { Header } from "react-native-elements";
import { AntDesign } from '@expo/vector-icons';

export const HeaderReturnMenu = (props) => (
    <TouchableOpacity onPress={() => props.returnLastView()}>
        <AntDesign name="arrowleft" size={25}/>
    </TouchableOpacity>
);

export const HeaderStatisticPlayer = (props) => (
    <Header
        leftComponent={<HeaderReturnMenu returnLastView={() => props.returnList()} />}
        centerComponent={{ text: props.headerName, style: { fontWeight: 'bold' } }}
        containerStyle={{
            backgroundColor: '#FFF',
            justifyContent: 'space-around',
        }}
    />
);

export const PlayerStatisticData = (props) => (
    <View style={{ flexDirection: 'row', paddingTop: 25 }}>
        <Text>
            {props.nameDirection+' : '}
        </Text>
        <Text>
            {props.name !== null ? props.name : 'N/A'}
        </Text>
    </View>
);

export const PlayerStatistic = (props) => (
    <View style={{ flex: 1 }}>
        <PlayerStatisticData nameDirection={'Club'} name={props.player.club} />
        <PlayerStatisticData nameDirection={'Prénom'} name={props.player.firstname} />
        <PlayerStatisticData nameDirection={'Nom'} name={props.player.lastname} />
        <PlayerStatisticData nameDirection={'avgRate'} name={props.player.stats.avgRate} />
        <PlayerStatisticData nameDirection={'currentChampionship'} name={props.player.stats.currentChampionship} />
        <PlayerStatisticData nameDirection={'percentageStarter'} name={props.player.stats.percentageStarter} />
        <PlayerStatisticData nameDirection={'sumGoals'} name={props.player.stats.sumGoals} />
    </View>
);