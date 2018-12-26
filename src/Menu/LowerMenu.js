import React from "react";
import MenuButton from "../Util/MenuButton";
import assets from "../Assets";
import Elm from "../Util/Elm";

export default class LowerMenu extends React.Component {
  render() {
    const toDisplay = [assets.redo, assets.undo]
    console.log("screen width: " + this.props.screenWidth)
    console.log("total button width: " + toDisplay.map(a => a.width * this.props.scale).reduce((a,b) => a + b))
    const spaceBetweenComponents = (this.props.screenWidth - toDisplay.map(a => a.width * this.props.scale).reduce((a,b) => a + b))  / (1 + toDisplay.length)
    var posSoFar = spaceBetweenComponents
    const positions = toDisplay.map(a => {
      const result = posSoFar
      posSoFar += (a.width * this.props.scale + spaceBetweenComponents)
      return result
    })
    return (
      <Elm>
        <Elm>
          <MenuButton
            style={{...dynamicStyles.normalButton,
              top: this.props.screenHeight - assets.buttonHeights * this.props.scale,
              left: positions[0],
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
              left: positions[1],
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















