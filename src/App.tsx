/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from "react";
import { View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import TabNavigation from "./navigation/tab.navigation";

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <View style={{flex: 1}}>
        <TabNavigation />
      </View>
    </NavigationContainer>
  );
}

export default App;
