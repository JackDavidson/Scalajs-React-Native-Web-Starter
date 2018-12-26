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

    lockOrientation(orientation) {
        const expo = require('expo')
        switch (orientation) {
          case "all":
            expo.ScreenOrientation.allow(expo.ScreenOrientation.Orientation.ALL)
          case "portrait":
            expo.ScreenOrientation.allow(expo.ScreenOrientation.Orientation.PORTRAIT)
          case "landscape_left":
            expo.ScreenOrientation.allow(expo.ScreenOrientation.Orientation.LANDSCAPE_LEFT)
          case "landscape":
            expo.ScreenOrientation.allow(expo.ScreenOrientation.Orientation.LANDSCAPE)
        }
    }

    render() {
        const { fontsAreLoaded } = this.state
        return !fontsAreLoaded ? <View/> : <HybridApp lockOrientation={this.lockOrientation}/>
    }
}
