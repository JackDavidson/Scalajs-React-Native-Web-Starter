import React from "react";
import {Dimensions, Platform, StatusBar} from "react-native";
import model from './Model/Model';
import LowerMenu from "./Menu/LowerMenu";
import Elm from "./Util/Elm";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    StatusBar.setHidden(true, 'slide');
    const { width, height } = Dimensions.get('window');
    this.state = {...model, width: width, height: height}
    console.log("model is: " + model)
    if (Platform.OS === 'web')
      window.addEventListener("resize", () => setTimeout(this.updateDimensions.bind(this), 50));
  }
  updateDimensions() {
    const { width, height } = Dimensions.get('window');
    this.setState({height: height, width: width});
  }
  render() {
    console.log("state is: " + this.state)
    return (
      <Elm>
        <StatusBar hidden />
        <LowerMenu desktop={this.state.display.desktop}
                   portrait={this.state.display.portrait}
                   scale={this.state.display.scale}
                   screenHeight={this.state.height}
                   screenWidth={this.state.width}/>
      </Elm>
    );
  }
}
