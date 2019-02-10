package sri.mobile.template

import sri.core.ReactNode

import scala.scalajs.js.annotation.{JSExport, JSExportTopLevel}

// This shows how to export a Scala.js component. Note that JSExportTopLevel works on the internals of an object as well
// as on classes. Classes appear to react as functions which return an instance of the class.
@JSExportTopLevel("MyScalajsTopLevelComponent")
class MyScalajsTopLevelComponent(text: String) {
  var someVar = "initialValue"
  // to make a function callable by react/javascript, simply add a @JSExport annotation
  @JSExport
  def setSomeVar(text: String): Unit = someVar = text
  @JSExport
  def render(): ReactNode = LowerMenu()()
}
