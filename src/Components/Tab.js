import React from "react";
import {Dimensions, View, Platform} from "react-native";
import StringLine from "./StringLine";

const courierSizing = {
  '28': {height: 30 , width: 17},
  '29': {height: 30 , width: 17.5},
  '30': {height: 30 , width: 18},
  '31': {height: 30 , width: 18.8},
  '32': {height: 30 , width: 19.4},
}

export default class Tab extends React.Component {
  constructor(props) {
    super(props)
    const {height, width} = Dimensions.get('window');
    this.state = {height: height, width: width, top: 0, fontSize: 32}

    if (Platform.OS === 'web')
      window.addEventListener("resize", () => setTimeout(this.updateDimensions.bind(this), 50));
  }
  updateDimensions() {
    const { width, height } = Dimensions.get('window');
    this.setState({height: height, width: width});
  }
  render() {
    return (
      <StringLine
      text={'-'.repeat(parseInt(this.state.width/courierSizing[this.state.fontSize].width))}
      fontSize={this.state.fontSize}
      left={5}
      top={20}
      />
    );
  }
}
