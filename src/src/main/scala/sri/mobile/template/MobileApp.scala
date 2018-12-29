package sri.mobile.template


import sri.universal.components.TextC

import scala.scalajs.js.annotation.JSExportTopLevel
import scala.language.postfixOps

object MobileApp {
  // not used
  def main(args: Array[String]) = {}

  @JSExportTopLevel("MyExportedComponent")
  val MyExportedComponent = TextC("sbt> g8Scaffold drawerNavigation1234")






  //@JSExportTopLevel("MyExportedComponent")
  /*val root = StackNavigator(
    StackNavigatorConfig(
      cardStyle = GlobalStyles.defaultCardStyle,
      navigationOptions = NavigationStackScreenOptions(
        headerTintColor = "white",
        headerBackTitle = "Back",
        headerStyle = GlobalStyles.defaultHeader
      )
    ),
    registerStackScreen[AboutScreen](navigationOptions = NavigationStackScreenOptions(title = "About"))
  )*/



}
