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
  }
  updateDimensions() {
    const { width, height } = Dimensions.get('window');
    this.setState({height: height, width: width});
  }
  componentDidMount() {
    if (Platform.OS === 'web')
      window.addEventListener("resize", this.updateDimensions.bind(this));
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions.bind(this));
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
