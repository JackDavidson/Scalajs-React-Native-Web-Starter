import {Image} from "react-native";
import React from "react";

const require2 = require

export default class CrossImage extends React.Component {
  render() {
    const newProps = {...this.props,
      source: (this.props.platform === 'web')
        ? require("../assets/undo.svg")
        : require("../assets/undo.png")}

    return <Image{...newProps}/>
  }
}