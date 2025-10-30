import {
  TextInput,
  View,
  StyleSheet,
  Pressable,
  Alert,
  Text,
  Dimensions,
  useWindowDimensions,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import PrimaryButton from "../components/PrimaryButton";
import { use, useState } from "react";
import Colors from "../constants/Colors";

const StartGameScreen = ({ onPickNumber }) => {
  const { width, height } = useWindowDimensions(); // to handle orientation changes
  const [enteredNumber, setEnteredNumber] = useState("");

  const numberInputHandler = (inputText) => {
    setEnteredNumber(inputText);
  };

  const onPressHandler = () => {
    const chosenNumber = parseInt(enteredNumber);

    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert(
        "Invalid Number!",
        "Number has to be a number between 1 and 99.",
        [
          {
            text: "Okay",
            style: "destructive",
            onPress: () => setEnteredNumber(""),
          },
        ]
      );
      return;
    }
    onPickNumber(chosenNumber);
  };

  const marginTop = height < 400 ? 30 : 100;
  return (
    <ScrollView style={styles.screen}>
      <KeyboardAvoidingView style={styles.screen} behavior="position">
        <View style={[styles.rootContainer, { marginTop: marginTop }]}>
          <Text style={styles.title}>Guess My Number</Text>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.numberInput}
              maxLength={2}
              keyboardType="number-pad"
              autoCapitalize="none"
              autoCorrect={false}
              value={enteredNumber}
              onChangeText={(text) => numberInputHandler(text)}
            />
            <View style={styles.buttonContainer}>
              <View style={styles.button}>
                <PrimaryButton onPress={() => setEnteredNumber("")}>
                  Reset
                </PrimaryButton>
              </View>
              <View style={styles.button}>
                <PrimaryButton onPress={onPressHandler}>Confirm</PrimaryButton>
              </View>
            </View>
          </View>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

export default StartGameScreen;

const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  rootContainer: {
    // marginTop: 100,
    flex: 1,
    alignItems: "center",
  },
  title: {
    fontSize: deviceWidth < 380 ? 22 : 36,
    fontWeight: "bold",
    color: "white",
    // borderWidth: Platform.OS === 'android' ? 2 : 0,
    borderWidth: Platform.select({ android: 2, ios: 0 }), // alternative way
    borderColor: "white",
    padding: 12,
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
  numberInput: {
    height: 60,
    width: 50,
    fontSize: 32,
    borderBottomColor: Colors.accent500,
    borderBottomWidth: 2,
    color: Colors.accent500,
    marginVertical: 8,
    fontWeight: "bold",
    textAlign: "center",
  },
  buttonContainer: {
    flexDirection: "row",
  },
  button: {
    flex: 1,
  },
});
