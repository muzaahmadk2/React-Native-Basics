import { Pressable } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

const IconButton = ({ color, icon, size, onPress }) => {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => pressed && { opacity: 0.5 }}
    >
      <Ionicons size={size} name={icon} color={color} />
    </Pressable>
  );
};

export default IconButton;
