import { View, Text, StyleSheet, Pressable } from "react-native";
import Colors from "../constants/Colors";

const PrimaryButton = ({ children, onPress }) => {
  return (
    <View style={styles.outerContainer}>
      <Pressable
        style={({ pressed }) =>
          pressed
            ? [styles.buttonContainer, { opacity: 0.75 }]
            : styles.buttonContainer
        }
        android_ripple={{ color: "#642e02ff" }}
        onPress={onPress}
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
};
export default PrimaryButton;

const styles = StyleSheet.create({
  outerContainer: {
    margin: 4,
    overflow: "hidden",
  },
  buttonContainer: {
    backgroundColor: Colors.primary600,
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 4,
    borderRadius: 28,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
  },
});
