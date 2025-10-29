import { StyleSheet, ImageBackground, StatusBar } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import StartGameScreen from "./screens/StartGameScreen";
import GameScreen from "./screens/GameScreen";
import { useState } from "react";
import Colors from "./constants/Colors";
import GameOverScreen from "./screens/GameOverScreen";

export default function App() {
  const [pickedNumber, setPickedNumber] = useState(null);
  const [isGameOver, setIsGameOver] = useState(false);

  const onPickNumber = (number) => {
    setPickedNumber(number);
  };
  const onGameOver = () => {
    setIsGameOver(true);
  };

  let screen = pickedNumber ? (
    <GameScreen pickedNumber={pickedNumber} onGameOver={onGameOver} />
  ) : (
    <StartGameScreen onPickNumber={onPickNumber} />
  );

  if (isGameOver) {
    screen = <GameOverScreen />;
  }
  return (
    <>
      <StatusBar style="light" />
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
          <SafeAreaView style={styles.rootscreen}>{screen}</SafeAreaView>
        </ImageBackground>
      </LinearGradient>
    </>
  );
}

const styles = StyleSheet.create({
  rootscreen: {
    flex: 1,
  },
});
