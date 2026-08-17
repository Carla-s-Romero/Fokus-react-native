import { StyleSheet, Text } from "react-native";

export const Timer = ({ totalSeconds }) => {
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;

  const formattedTime = `${String(minutes).padStart(2, "0")}:${String(
    seconds
  ).padStart(2, "0")}`;

  return (
    <Text style={styles.countTime}>
      {formattedTime}
    </Text>
  );
};

const styles = StyleSheet.create({
  countTime: {
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 54,
    margin: 32,
  },
});