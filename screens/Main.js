import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Dimensions,
} from 'react-native';

import { Actions } from 'react-native-router-flux';

const window = Dimensions.get('window');

type Props = {};
export default class Login extends Component<Props> {
    render() {
        return (
            <View style={styles.total}>
                <Text
                    style={styles.dummy}
                    onPress={() => Actions.login()}>Login!</Text>
                <Text
                    style={styles.dummy}
                    onPress={() => Actions.showRooms()}>ShowRooms!</Text>
                <Text
                    style={styles.dummy}
                    onPress={() => Actions.chat()}>Chat!</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    total: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: window.height * 0.1,
    },
    dummy: {
        flex: 1,
        fontSize: 30,
        textAlignVertical: 'center',
    }
});