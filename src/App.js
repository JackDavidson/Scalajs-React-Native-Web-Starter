import React from "react";
import {Dimensions, StatusBar} from "react-native";
import model from './Model/Model';
/*import LowerMenu from "./Menu/LowerMenu";
import Elm from "./Util/Elm";
import Tab from "./Components/Tab";
*/
const SRI = require("./assets/generated/scalajs-output").MyScalajsTopLevelComponent;

export default class App extends React.Component {
  constructor(props) {
    super(props);
    StatusBar.setHidden(true, 'slide');
    const { width, height } = Dimensions.get('window');
    this.state = {...model, width: width, height: height}
    console.log("model is: " + model)
    Dimensions.addEventListener("change", this.updateDimensions.bind(this));
  }
  updateDimensions() {
    const { width, height } = Dimensions.get('window');
    this.setState({height: height, width: width});
  }
  render() {
    console.log("state is: " + this.state)
    return SRI(this.state.display.platform, this.state.width, this.state.height).render()
/*
    return (
      <Elm>
        <StatusBar hidden />
        <LowerMenu desktop={this.state.display.desktop}
                   portrait={this.state.display.portrait}
                   lockOrientation={this.props.lockOrientation}
                   scale={this.state.display.scale}
                   screenHeight={this.state.height}
                   screenWidth={this.state.width}
                   updateModel={this.setState}/>
        <Tab screenHeight={this.state.height}
          screenWidth={this.state.width}/>
      </Elm>

    );*/
  }
}