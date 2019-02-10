package sri.mobile.template

import sri.core.{CreateElementSF, ReactElement}
import sri.universal.components.{Image, View}

import scala.scalajs.js

object staticObjs {
  val menuMaker = new RBoilerp ((buttons: Seq[Button]) => View()(buttons.map(_(0.52)): _*))
}
case class Button(img:  ImageSrc, onPress: () => Unit) extends RBoilerp (
  (scale: Double) =>
    Image(key = 1, sourceDynamic=img.src, style=js.Dynamic.literal(width=img.width * scale, height=img.height * scale))
)
case class LowerMenu() {
  val Component = (layout: String) => layout match {
    case "regular" => staticObjs.menuMaker(Seq(Button(Assets.dots, null)))
  }
  def apply(): ReactElement =  CreateElementSF(Component, "regular")
}