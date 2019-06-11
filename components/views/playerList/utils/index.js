import React from 'react';
import {
    Text,
    View,
    TouchableOpacity,
    TextInput
} from 'react-native';

export const PlayerSearch = (props) => (
    <View style={{ width: '100%', justifyContent: 'center', paddingTop: 50, paddingBottom: 20 }}>
        <View style={{ width: '100%', justifyContent: 'center', flexDirection: 'row' }}>
            <View style={{ width: '100%', justifyContent: 'center' }}>
                <TextInput
                    style={{width: '100%', height: 20}}
                    onChangeText={(filter) => props.onChangeFilter(filter)}
                    placeholder={'Rechercher un joueur..'}
                    value={props.filter}
                />
                <View style={{ paddingTop: '5%', width: '100%' }}>
                    <View style={{ width: '100%', height: 1, backgroundColor: "#2cc6fe" }} />
                </View>
            </View>
        </View>
    </View>
);

export const PlayerListView = (props) => (
    <View>
        {
            props.data.map( (v, i) => (
                <TouchableOpacity key={i} style={{ backgroundColor: i%2 === 0 ? 'grey' : 'blank', height: 65, justifyContent: 'center' }} onPress={() => props.onClickPlayer(v)}>
                    <View style={{ flexDirection: 'row'}}>
                        <Text>
                            {v.firstname}{" "}
                        </Text>
                        <Text>
                            {v.lastname}
                        </Text>
                    </View>
                    <View style={{ flexDirection: 'row'}}>
                        <Text>
                            {"Club : "}
                        </Text>
                        <Text>
                            {v.club}
                        </Text>
                    </View>
                </TouchableOpacity>
            ))
        }
    </View>
);