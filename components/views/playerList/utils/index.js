import React from 'react';
import {
    Text,
    View,
    TouchableOpacity
} from 'react-native';

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