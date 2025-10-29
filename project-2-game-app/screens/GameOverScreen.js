import { Text, View, StyleSheet, Image } from "react-native";
import Colors from "../constants/Colors";
import PrimaryButton from "../components/PrimaryButton";

const GameOverScreen = ({ roundNumber, guessedNumber, onGameRestart }) => {
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Game Over!</Text>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require("../assets/success.png")}
        ></Image>
      </View>
      <Text style={styles.summary}>
        Your Phone Needed <Text style={styles.highlight}>{roundNumber}</Text>{" "}
        Rounds To Guess The Number{" "}
        <Text style={styles.highlight}>{guessedNumber}</Text>
      </Text>
      <PrimaryButton onPress={onGameRestart}>Start New Game</PrimaryButton>
    </View>
  );
};

export default GameOverScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
    borderWidth: 2,
    borderColor: "white",
    padding: 12,
    textAlign: "center",
  },
  imageContainer: {
    width: 300,
    height: 300,
    borderRadius: 150,
    borderWidth: 3,
    borderColor: Colors.primary500,
    overflow: "hidden",
    margin: 36,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  summary: {
    fontSize: 24,
    textAlign: "center",
    color: "white",
    marginVertical: 24,
  },
  highlight: {
    fontWeight: "bold",
    color: Colors.primary500,
  },
});
