# Tabmaker React

const SRI = require("./assets/js/scalajs-output-android").MyExportedComponent;
return SRI




removing:
"react-navigation": "^2.18.3"



  "rnpm": {
    "assets": [
      "./app/assets/fonts/"
    ]
  },


to build sri stuff:
sbt ~android:dev

remember:

node_modules/react-native-scripts/build/bin/crna-entry.js


at the end of the file:
const NativeApp = $m_Lsri_mobile_template_default_package$().root$1
export default NativeApp

further, wrapped in:
/*eslint-disable no-undef*/
/*eslint-enable no-undef*/




additionally, StackNavigator became createStackNavigator
then, I deleted .babelrc


also added these files:

}jdavidson@ubuntu-jack-desktop-0001:~/Desktop/workspace/tabmaker-react$ cat src/.expo/
packager-info.json  settings.json       
jdavidson@ubuntu-jack-desktop-0001:~/Desktop/workspace/tabmaker-react$ cat src/.expo/*
{
  "devToolsPort": 19007
}{
  "hostType": "lan",
  "lanType": "ip",
  "dev": true,
  "minify": false,
  "urlRandomness": null
}jdavidson@ubuntu-jack-desktop-0001:~/Desktop/workspace/tabmaker-react$ 



## Quick Start

1. install dependencies
sudo apt-get install -y nodejs
sudo ln -s /usr/local/bin/node /usr/local/bin/nodejs
sudo npm install -g react expo-cli react-native-scripts react-scripts
npm install

2. run on web
react-scripts start

3. run on android
react-native-scripts android


## Introduction

This repo is intending to provide an easy starting point for developers looking to make fully cross platform applications across both web with [React Native Web](https://github.com/necolas/react-native-web) and mobile with [Expo](https://github.com/react-community/create-react-native-app).

All branches represent a particular starting point.

It is bootstrapped with [Create React App](https://github.com/facebook/create-react-app) so you can run `yarn web` in order to start up the development web server with all the hot reloading goodness you've come to expect.

It has then been integrated with [Create React Native App](https://github.com/react-community/create-react-native-app) and running `yarn ios` or `yarn android` will start the Expo packager. You can also run the project from the Expo XDE program.

## Branches

| Branch                  | Description                                                                                                                                                              |
| ----------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| master                  | The most minimal possible boilerplate, will always be the case                                                                                                           |
| redux                   | Implements redux reducers, actions, store and connection including example                                                                                               |
| navigation-react-router | Using react-router-dom, react-router-native and react-router-navigation in order to have a platform agnostic navigation solution including native look at feel on phones |
| typescript              | Uses the TypeScript compiler with command `yarn watch` to track file changes and compile on the fly for stronger typed RNW code                                          |

## Get Started

Clone the branch with the starting point you want and just rename the project (don't forget the `package.json`, Run `git remote rm origin && yarn` to remove the ref to this repo and install node_modules then you're good to go. 🙂

A full list of the scripts defined in `package.json` is shown below.

| Script              | Action                                                  |
| ------------------- | ------------------------------------------------------- |
| `yarn web`          | Start CRA Development Build                             |
| `yarn build-web`    | Create production build for web                         |
| `yarn eject-web`    | Eject from CRA                                          |
| `yarn start-native` | Start the Expo packager                                 |
| `yarn eject-native` | Eject from Expo                                         |
| `yarn android`      | Start expo packager and install app to Android Emulator |
| `yarn ios`          | Start expo packager and install app to iOS Simulator    |
| `yarn test-native`  | Run testing script for mobile app                       |
| `yarn test-web`     | Run testing script for web app                          |
| `yarn test`         | Run both testing scripts                                |

### Future Plans for this Library

The aim for this library is to make several branches that have different starting points i.e. Navigation, Auth etc.

Master branch will always be the most minimal starting point.

I'm also toying with the idea of doing a starting point with React Native CLI instead of Expo however that will mean the UI for mobile will less predictiable than developing with Expo.

If you have any ideas for a boilerplate then please create an issue or even better a pull request! I'm hoping to get this repo to be a big hub for getting started with React Native Web with tutorials etc.

#### Tasks

*   Get jest working properly
*   TypeScript
*   ReasonML

### Credit

*   Huge thanks to [Nicolas Gallagher](https://github.com/necolas) for making React Native Web
*   Thanks to [Expo](https://expo.io/) for making it so easy to get started with React Native development
*   Thanks to [Yannick Spark](https://twitter.com/yannickdot) for writing [this great article](https://medium.com/@yannickdot/write-once-run-anywhere-with-create-react-native-app-and-react-native-web-ad40db63eed0) which inspired me to get started with React Native Web
