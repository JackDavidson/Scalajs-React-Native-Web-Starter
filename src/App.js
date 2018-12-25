import React from "react";
import {View, Text, Animated, StyleSheet, StatusBar} from "react-native";
import model from './Model/Model';
import MenuButton from "./Util/MenuButton";
import assets from "./Assets";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.imageAnimation = new Animated.Value(0);
    this.state = model
  }

  componentDidMount() {
    Animated.loop(
      Animated.timing(this.imageAnimation, {
        toValue: 1,
        duration: 1005
      })
    ).start();
    StatusBar.setBarStyle("light-content");
  }

  render() {
    const rotationStyle = {
      transform: [
        {
          rotate: this.imageAnimation.interpolate({
            inputRange: [0, 1],
            outputRange: ["0deg", "360deg"]
          })
        }
      ]
    };

    return (
      <View style={styles.app}>
        <View style={styles.appHeader}>
          <Animated.Image
            style={[styles.headerImage, rotationStyle]}
            resizeMode={"contain"}
            source={require("./assets/undo.png")}
          />
          <Text style={styles.appTitle}>Welcome to React Native Web️</Text>
          <Text style={styles.appSubtitle}>Vanilla Edition</Text>
        </View>
        <View style={{alignItems: "center", flex: 3}}>
          <Text style={styles.appIntro}>To get started, edit src/App.js and save to reload. Your platform
            is: {model.display.platform}</Text>
        </View>
        <View>
          <MenuButton
            style={styles.headerImage2}
            resizeMode={"contain"}
            source={assets.undo}
            platform={this.state.display.platform}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  app: {
    flex: 1
  },
  appHeader: {
    flex: 1,
    backgroundColor: "#222",
    padding: 20,
    justifyContent: "center",
    alignItems: "center"
  },
  headerImage: {
    width: 200,
    height: 200,
    flex: 3
  },
  headerImage2: {
    width: 200,
    height: 200,
    top: 0,
    left: 0
  },
  undoImage: {
    height: .2 * model.display.width,
    flex: 3,
  },
  appTitle: {
    flex: 1,
    fontSize: 16,
    color: "white"
  },
  appSubtitle: {
    color: "white"
  },
  appIntro: {
    flex: 3,
    fontSize: 30,
    textAlign: "center"
  }
});
