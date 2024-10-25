# github_app

## Getting Started

```sh
git clone https://github.com/cayolegal1/github_app.git
cd github_app
```

## Install Dependencies

Install `node_modules` by running

```sh
yarn
or 
npm install
```

## Running on iOS

Install iOS dependencies, doing the following.
\*\*\*\* PD: Run from terminal

```sh
cd ios && pod deintegrate && pod install && cd ..
```

Then execute.

```sh
yarn ios
or
npm run ios
```

## Running on Android

Clean up and run on android devices.

```sh
cd android && ./gradlew clean && cd ..
```

Then execute.

```sh
yarn android
```

## Possible Issues

If having any issues with `android` emulator, try any of the following solutions.

-  [Missing Node or Watchman](https://reactnative.dev/docs/environment-setup?guide=native#node--watchman) - Install Node and Watchman softwares with homebrew 
-  [Missing Android Studio App](https://developer.android.com/studio) - Get Android Studio App 
-  [Missing Android SDK](https://developer.android.com/studio) - Get Android SDK in Android Studio (Make sure that have Android SDK Platform 33 and Intel x86 Atom_64 System Image or Google APIs Intel x86 Atom System Image or (for Apple M1 Silicon) Google APIs ARM 64 v8a System Image)
-  [JAVA_HOME](https://www.codegrepper.com/code-examples/java/set+java_home+mac+big+sur) - Check JAVA enviroment path.
-  [ANDROID_HOME](https://developer.android.com/tools/variables) - Check ANDROID_HOME enviroment path.
-  [app:validateSigningDebug FAILED](https://raw.githubusercontent.com/facebook/react-native/master/template/android/app/debug.keystore) - Add `debug.keyStore` to `android/app`.

If having issues with `ios` simulator, try any of the following solutions.

-  [Missing Node or Watchman](https://reactnative.dev/docs/environment-setup?guide=native#node--watchman) - Install Node and Watchman softwares with homebrew following the react native documentation instructions, if also don't have homebrew, get it here https://facebook.github.io/watchman/
-  [Missing Cocoapods](https://cocoapods.org/) - Install cocoapods software
-  [Missing XCode App](https://developer.apple.com/xcode/resources/) - Get XCode App
-  [NVM_PATH](https://reactnative.dev/docs/environment-setup?guide=native#optional-configuring-your-environment) - If using nvm, follow the documentation instructions
-  [Missing packages] - Execute in the terminal: cd ios && pod deintegrate && pod install

