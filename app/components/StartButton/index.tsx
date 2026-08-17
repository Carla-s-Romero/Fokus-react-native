import { StyleSheet, Text, View, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export const StartButton = () => {
  return (
    <View>
      <Pressable style={styles.startTimerButton}>
        <Ionicons name="play" size={22} color="#000" />
        <Text style={styles.startTimerText}>Começar</Text>
      </Pressable>
    </View>
  );
};


const styles = StyleSheet.create({
  startTimerButton: {
    flexDirection: "row",
    justifyContent: "center",
    backgroundColor: "#B872FF",
    borderRadius: 32,
    padding: 20,
    gap: 14
  },
  startTimerText: {
    color: "#000000",
    fontWeight: "700",
    textAlign: "center",
    fontSize: 18,
  }
});