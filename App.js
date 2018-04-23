import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View
} from 'react-native';

import {
    Router,
    Scene,
} from 'react-native-router-flux';

import Login from './screens/Login'
import ShowRooms from './screens/ShowRooms'
import Chat from './screens/Chat'
import Main from './screens/Main'

type Props = {};
export default class App extends Component<Props> {
    render() {
        return (
            <Router>
                <Scene key="root">
                    <Scene
                        key="main"
                        component={Main}
                        hideNavBar={true}
                    />
                    <Scene
                        key="login"
                        component={Login}
                        hideNavBar={true}
                    />
                    <Scene
                        key="showRooms"
                        component={ShowRooms}
                        hideNavBar={true}
                    />
                    <Scene
                        key="chat"
                        component={Chat}
                        hideNavBar={true}
                    />
                </Scene>
            </Router>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});
