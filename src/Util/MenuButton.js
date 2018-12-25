import {Image} from "react-native";
import React from "react";

export default class MenuButton extends React.Component {
  render() {
    return <Image{...this.props}/>
  }
}