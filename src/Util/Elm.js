import React from "react";
import {Dimensions, View, Platform} from "react-native";

export default class Elm extends React.Component {
  constructor(props) {
    super(props)
    const {height, width} = Dimensions.get('window');
    this.state = {height: height, width: width, top: 0}
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
    return (
      <View style={{
        left: 0,
        width: this.state.width,
        top: this.state.top, //StatusBar.currentHeight,
        height: this.state.height,
        position: 'absolute',
        backgroundColor:'transparent'}}
        {...this.props}/>
    );
  }
}
