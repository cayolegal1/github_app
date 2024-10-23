import React from "react";
import { View } from "react-native";
import { Providers } from "./base/global";
import TabNavigation from "./navigation/tab.navigation";

function App(): React.JSX.Element {
  return (
    <Providers>
      <View style={{ flex: 1 }}>
        <TabNavigation />
      </View>
    </Providers>
  );
}

export default App;
