import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    FlatList,
    TextInput,
    Keyboard,
    Dimensions,
    TouchableWithoutFeedback,
} from 'react-native';
import Drawer from 'react-native-drawer';

const window = Dimensions.get('window');

let texts = [];

for (var i = 0; i < 30; i++) {
    texts.push({key: i});
}

type Props = {};
export default class Chat extends Component<Props> {
    constructor(props) {
        super(props);
        this.state = {
            text: null,
            list: [],
        };
        this.listSize = texts.length;
        this.scrolled = false;
        this._keyboardDidShow = this._keyboardDidShow.bind(this);
        this.endScroll = this.endScroll.bind (this);
        this.transferText = this.transferText.bind (this);
    }

    componentWillMount() {
        this.setState({list: texts});
        this.keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', this._keyboardDidShow);
    }

    componentWillUnmount() {
        this.keyboardDidShowListener.remove();
    }

    _keyboardDidShow(e) {
        this.scrolled = false;
    }

    endScroll ({changed}){
        changed.map((item) => {
                if (item.index == this.listSize - 1 && item.isViewable == false && this.scrolled == false) {
                    this.refs.flatList.scrollToEnd();
                }
            }
        );
    }

    _renderItem ({item}){
        return (
            <Text
                style={styles.eachChat}>
                Each item is : {item.key}
            </Text>);
    }

    transferText (){
        if (this.state.text == null)
            return;

        let list = texts;
        list.push ({key: this.state.text});
        this.listSize += 1;
        this.setState({
            text: null,
            list: list,
        });
    }

    render() {
        return (
            <View style={styles.total}>
                <Drawer
                    ref={"drawer"}
                    type="overlay"
                    content={<Text>sdfsdf</Text>}
                    styles={drawerStyles}
                    tapToClose={true}
                    openDrawerOffset={0.3}
                    elevation={600}
                    side={"right"}
                    tweenDuration={15}
                >
                    <View style={styles.header}>
                        <View style={styles.backIcon}/>
                        <Text style={styles.title}>궁동-대전역 택시팟</Text>
                        <TouchableWithoutFeedback
                            onPress={() => {this.refs.drawer.open();
                                            Keyboard.dismiss();}}>
                            <View style={styles.hamburger}/>
                        </TouchableWithoutFeedback>
                    </View>
                    <View style={styles.body}>
                        <FlatList
                            ref={"flatList"}
                            data={this.state.list}
                            //extraData={this.state.list}
                            onScroll={() => {this.scrolled = true;}}
                            onViewableItemsChanged={this.endScroll}
                            renderItem={this._renderItem}
                            onContentSizeChange={() => {this.refs.flatList.scrollToEnd()}}
                        />
                    </View>
                    <View style={styles.footer}>
                        <View style={styles.fileIcon}></View>
                        <View style={styles.textSet}>
                            <TextInput
                                style={styles.textInput}
                                multiline
                                underlineColorAndroid={'transparent'}
                                onChangeText={(text) => {
                                    this.setState({text: text});
                                    this.refs.flatList.scrollToEnd();
                                }}
                                value={this.state.text}
                            />
                            <TouchableWithoutFeedback
                                onPress={this.transferText}>
                                <View style={styles.transferButton}>
                                    <Text style={styles.transferButtonText}>전송</Text>
                                </View>
                            </TouchableWithoutFeedback>
                        </View>
                    </View>
                </Drawer>
            </View>
        );
    }
}

const drawerStyles = {
    drawer: {
        shadowColor: '#000000',
        shadowOffset: {
            width: 50,
            height: 100,
        },
        shadowOpacity: 1.0,
        shadowRadius: 3,
        backgroundColor: '#FFFF00',
    },
    main: {
        backgroundColor: '#999999',
    },
};

const styles = StyleSheet.create({
    total: {
        flex: 1,
    },
    header: {
        backgroundColor: '#BE94D7',
        flexDirection: 'row',
        padding: window.height * 0.02,
        justifyContent: 'space-between',
    },
    backIcon: {
        backgroundColor: '#FFFFFF',
        width: window.height * 0.045,
        height: window.height * 0.045,
        marginRight: window.height * 0.02,
    },
    title: {
        color: '#FFFFFF',
        fontSize: window.height * 0.03,
        marginLeft: 0,
        paddingLeft: 0,
    },
    hamburger: {
        backgroundColor: '#FFFFFF',
        width: window.height * 0.045,
        height: window.height * 0.045,
        marginLeft: window.height * 0.02,
    },
    body: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
    footer: {
        backgroundColor: '#CCCCCC',
        flexDirection: 'row',
        padding: window.height * 0.009,
    },
    fileIconView: {
        width: window.height * 0.065,
        flexDirection: 'column',
        justifyContent: 'flex-end',
        marginRight: window.height * 0.009,
    },
    fileIcon: {
        backgroundColor: '#FFFFFF',
        height: window.height * 0.065,
        width: window.height * 0.065,
        marginRight: window.height * 0.009,
        alignSelf: 'flex-end',
    },
    eachChat: {
        backgroundColor: '#f0f0f0',
        marginVertical: window.height * 0.01,
        marginHorizontal: window.width * 0.03,
        height: window.height * 0.07,
    },
    textSet: {
        backgroundColor: '#FFFFFF',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'stretch',
        display: 'flex',
    },
    textInput: {
        flex: 1,
        padding: 0,
        includeFontPadding: false,
        fontSize: window.height * 0.025,
    },
    transferButtonText: {
        color: '#FFFFFF',
        fontSize: window.height * 0.025,
    },
    transferButton: {
        backgroundColor: '#999999',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        padding: window.height * 0.015,
    },
});