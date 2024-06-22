import { Platform, NativeModules } from "react-native";
import { StyleSheet, Text, View } from "react-native";
import { Home } from "./App/Screens/HomeScreens/Home";
import { PaperProvider } from "react-native-paper";

const { StatusBarManager } = NativeModules;

export const App = () => {
  return (
    <PaperProvider>
      <View style={styles.container}>
        <Home />
      </View>
    </PaperProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 8,
    marginTop: Platform.OS === "ios" ? 20 : StatusBarManager.HEIGHT,
  },
});

export default App;
