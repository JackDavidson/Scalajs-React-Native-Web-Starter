package sri.mobile.template

import sri.core.ReactElement
import sri.universal.components.TextC

import scala.scalajs.js.annotation.{JSExport, JSExportTopLevel}
import scala.language.postfixOps
import scala.scalajs.js

object MobileApp {
  def main(args: Array[String]) = {}
  //@JSExportTopLevel("MyExportedComponent")
  def MyExportedComponent(text: String) = TextC(text)

}

@JSExportTopLevel("MyExportedComponent")
class MyCustomText(text: String) {
  var someVar = "initialValue"
  @JSExport
  def setSomeVar(text: String): Unit = {
    someVar = text
  }
  @JSExport
  def render(): ReactElement = {
    return TextC(text + someVar)
  }
}
