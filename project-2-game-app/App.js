import { StyleSheet, ImageBackground } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import StartGameScreen from "./screens/StartGameScreen";

export default function App() {
  return (
    <LinearGradient
      style={styles.rootscreen}
      colors={["#3d001fff", "#ad8606ff"]}
    >
      <ImageBackground
        source={require("./assets/background.jpg")}
        resizeMode="cover"
        style={styles.rootscreen}
        imageStyle={{ opacity: 0.15 }}
      >
        <StartGameScreen />
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootscreen: {
    flex: 1,
  },
});
