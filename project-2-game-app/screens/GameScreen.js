import { Text, View, StyleSheet, Alert, FlatList } from "react-native";
import Colors from "../constants/Colors";
import NumberContainer from "../components/game/NumberContainer";
import { useEffect, useState } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import PrimaryButton from "../components/PrimaryButton";
import GuessLogItem from "../components/game/GuessLogItem";

const randomNumberGenerator = (max, min, exclude) => {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;
  if (rndNum === exclude) {
    return randomNumberGenerator(max, min, exclude);
  } else {
    return rndNum;
  }
};

let minBoundary = 1;
let maxBoundary = 100;

const GameScreen = ({ pickedNumber, onGameOver }) => {
  const initialGuess = randomNumberGenerator(1, 100, pickedNumber);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);
  const [guessRounds, setGuessRounds] = useState([initialGuess]);

  const nextGuessHandler = (direction) => {
    if (
      (direction === "lower" && currentGuess < pickedNumber) ||
      (direction === "higher" && currentGuess > pickedNumber)
    ) {
      Alert.alert("Don't lie!", "You know that this is wrong...", [
        { text: "Sorry!", style: "cancel" },
      ]);
      return;
    }

    if (direction === "lower") {
      maxBoundary = currentGuess;
    } else {
      minBoundary = currentGuess + 1;
    }
    const newRndNumber = randomNumberGenerator(
      minBoundary,
      maxBoundary,
      currentGuess
    );
    setCurrentGuess(newRndNumber);
    setGuessRounds((prevGuessRounds) => [newRndNumber, ...prevGuessRounds]);
  };

  useEffect(() => {
    if (currentGuess === pickedNumber) {
      minBoundary = 1;
      maxBoundary = 100;
      onGameOver(guessRounds.length);
    }
  }, [currentGuess, pickedNumber, onGameOver]);

  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Game Screen</Text>
      <NumberContainer>{currentGuess}</NumberContainer>
      <View style={styles.inputContainer}>
        <Text style={styles.textinput}>Higher or Lower?</Text>
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <PrimaryButton onPress={nextGuessHandler.bind(this, "higher")}>
              <Ionicons name="add-circle-outline" size={24} color="white" />
            </PrimaryButton>
          </View>
          <View style={styles.button}>
            <PrimaryButton onPress={nextGuessHandler.bind(this, "lower")}>
              <Ionicons name="remove-circle-outline" size={24} color="white" />
            </PrimaryButton>
          </View>
        </View>
      </View>
      <View style={styles.listContainer}>
        <FlatList
          data={guessRounds}
          renderItem={(itemDat) => (
            <GuessLogItem
              roundNumber={itemDat.index + 1}
              guess={itemDat.item}
            />
          )}
          keyExtractor={(item) => item}
          alwaysBounceVertical={false}
        />
      </View>
    </View>
  );
};

export default GameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
    alignItems: "center",
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
  textinput: {
    fontSize: 24,
    color: Colors.accent500,
    marginBottom: 12,
    textAlign: "center",
  },
  inputContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 32,
    padding: 16,
    borderRadius: 8,
    backgroundColor: Colors.primary500,
    marginHorizontal: 24,
    elevation: 4, // for Android shadow
    shadowColor: "black", // for iOS shadow
    shadowOffset: { width: 0, height: 2 }, // for iOS shadow
    shadowRadius: 6, // for iOS shadow
    shadowOpacity: 0.25, // for iOS shadow
  },
  buttonContainer: {
    flexDirection: "row",
  },
  button: {
    flex: 1,
  },
  listContainer: {
    flex: 1,
    padding: 16,
  },
});
