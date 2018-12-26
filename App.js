import React from "react";
import HybridApp from "./src/App";
import {Platform, View} from "react-native";

export default class NativeApp extends React.Component {
    constructor() {
        super()
        this.state = {
            fontsAreLoaded: false
        }
    }

    async componentWillMount() {
        if (Platform.OS === 'android') {
            await require('expo').Font.loadAsync({
                'Courier New': require('./src/assets/fonts/courier_new.ttf')
            })
        }
        this.setState({ fontsAreLoaded: true })
    }
    render() {
        const { fontsAreLoaded } = this.state
        return !fontsAreLoaded ? <View/> : <HybridApp />
    }
}
