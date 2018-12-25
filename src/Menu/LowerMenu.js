import React from "react";
import MenuButton from "../Util/MenuButton";
import assets from "../Assets";
import Elm from "../Util/Elm";

export default class LowerMenu extends React.Component {
  render() {

    console.log("screen height is: " + this.props.screenHeight)


    return (
      <Elm>
        <Elm>
          <MenuButton
            style={{...dynamicStyles.normalButton,
              top: this.props.height - 50,
              width: assets.redo.width * this.props.scale,
              height: assets.buttonHeights * this.props.scale,
              position: 'absolute'}}
            resizeMode={"contain"}
            source={assets.undo.src}
          />
        </Elm>
        <Elm>
          <MenuButton
            style={{...dynamicStyles.normalButton,
              top: this.props.screenHeight - assets.buttonHeights * this.props.scale,
              width: assets.redo.width * this.props.scale,
              height: assets.buttonHeights * this.props.scale,
              position: 'absolute'}}
            resizeMode={"contain"}
            source={assets.redo.src}
          />
        </Elm>
      </Elm>
    )
  }
}

const dynamicStyles = {
  normalButton: {
    position: "absolute"
  }
}















