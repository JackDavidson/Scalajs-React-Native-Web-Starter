//enablePlugins(SriPlatformPlugin)
enablePlugins(ScalaJSPlugin)
scalaJSUseMainModuleInitializer := false
scalaJSLinkerConfig ~= (_.withModuleKind(ModuleKind.CommonJSModule))

name := "myAwesomeProject"

scalaVersion := "2.12.4"

lazy val versions = new {
  val sri = "2018.2.2-RC"
}

// after fastOptJS, we need to copy the file and prepend an eslint disable
(fastOptJS in Compile) := {
  val result = (fastOptJS in Compile).value
  val inputFile = result.data
  val outputFile = new File("./assets/generated/scalajs-output.js")
  IO.write(outputFile, "/*eslint-disable no-undef*/\n" + IO.read(inputFile))
  result
}

resolvers += Resolver.bintrayRepo("scalajs-react-interface", "maven")
resolvers += Resolver.bintrayRepo("scalajs-plus", "maven")
libraryDependencies ++= Seq(
  "scalajs-react-interface" %%% "core"                    % versions.sri,
  "scalajs-react-interface" %%% "mobile"                  % versions.sri,
  "scalajs-react-interface" %%% "universal"               % versions.sri,
  "scalajs-react-interface" %%% "vector-icons"            % versions.sri,
/*  "scalajs-react-interface" %%% "platform-config-ios"     % versions.sri % "ios", 
  "scalajs-react-interface" %%% "platform-config-android" % versions.sri % "android", */
  "scalajs-react-interface" %%% "navigation"              % versions.sri
)

scalacOptions ++= Seq(
  "-feature",
  "-deprecation",
  "-unchecked",
  "-language:implicitConversions"
)
