import Reactotron from "reactotron-react-native";

export const setupDebugger = () => {
  if (__DEV__) {
    Reactotron.configure({ name: "La Barra Py", host: "192.168.0.5" })
      .useReactNative({
        networking: {
          ignoreUrls: /symbolicate/,
        },
        overlay: true,
      })
      .connect();
  }
};
