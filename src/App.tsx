import React, { useEffect } from "react";
import { View } from "react-native";
import { Providers, setupApp } from "./base/global";
import TabNavigation from "./navigation/tab.navigation";

function App(): React.JSX.Element {
  useEffect(() => {
    setupApp();
  }, []);

  return (
    <Providers>
      <View style={{ flex: 1 }}>
        <TabNavigation />
      </View>
    </Providers>
  );
}

export default App;
