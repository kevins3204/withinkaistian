import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View
} from 'react-native';

type Props = {};
export default class ShowRooms extends Component<Props> {
    render() {
        return (
            <View style={styles.total}>
                <Text style={styles.dummy}>For Showing Rooms</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    total: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    dummy: {
        fontSize: 30,
    }
});