import { View, Text, StyleSheet, Pressable } from "react-native";

const PrimaryButton = ({ children }) => {
  return (
    <View style={styles.outerContainer}>
      <Pressable
        style={({ pressed }) =>
          pressed
            ? [styles.buttonContainer, { opacity: 0.75 }]
            : styles.buttonContainer
        }
        android_ripple={{ color: "#642e02ff" }}
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
    backgroundColor: "#72063c",
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
