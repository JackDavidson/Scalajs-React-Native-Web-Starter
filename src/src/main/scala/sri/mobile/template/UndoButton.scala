package sri.mobile.template

import scalajsplus.macros.FunctionObjectMacro
import sri.core.{CreateElementJS, JSComponent, ReactElement}
import scala.scalajs.js
import scala.scalajs.js.annotation.{JSGlobalScope, JSImport}

object UndoButton {
  val img = MyImage(MyAssetLoader.require("../undo.png"), Style(200, 200))
}

// defining the javascript 'require' function, so that it is callable from scala.
@js.native
@JSGlobalScope
object MyAssetLoader extends js.Any {
  def require(path: String): js.Any = js.native
}

trait ImageProps extends js.Object {
  val source: js.UndefOr[js.Any] = js.undefined
  val style: js.UndefOr[Style] = js.undefined
}
trait Style extends js.Object {
  val width: js.UndefOr[Double] = js.undefined
  val height: js.UndefOr[Double] = js.undefined
}
object Style {
  @inline
  def apply(width: Double, height: Double): Style = {
    val p = FunctionObjectMacro()
    p.asInstanceOf[Style]
  }
}
object MyImage {
  @inline
  def apply(source: js.Any, style: Style): ReactElement { type Instance = MyImageComponent.type } = {
    val p = FunctionObjectMacro()
    CreateElementJS[MyImageComponent.type](MyImageComponent, p.asInstanceOf[ImageProps], null, null)
  }
}
@js.native
@JSImport("react-native", "Image")
object MyImageComponent extends JSComponent[ImageProps] {}