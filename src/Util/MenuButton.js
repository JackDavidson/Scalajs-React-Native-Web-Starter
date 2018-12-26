import {Image, TouchableHighlight} from "react-native";
import React from "react";

export default class MenuButton extends React.Component {
  render() {
    return (
      <TouchableHighlight onPress={this.props.onPress}>
        <Image{...this.props}/>
      </TouchableHighlight>
    )
  }
}