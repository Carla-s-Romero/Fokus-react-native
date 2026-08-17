import { StyleSheet, View, Pressable, Text } from "react-native";
import pomodoro from "../../ultis/pomodoro";
import { Timer } from "../CountTimer/index";
import { StartButton } from "../StartButton";

export const ActionsButtons = ({ timerType, setTimerType }) => {
  return (
    <View style={styles.actions}>
      <View style={styles.buttonsActions}>
        {pomodoro.map((p) => (
          <Pressable
            key={p.id}
            style={timerType.id === p.id ? styles.contextButtonAtive : null}
            onPress={() => setTimerType(p)}
          >
            <Text style={styles.buttonText}>{p.display}</Text>
          </Pressable>
        ))}
      </View>

      <Timer totalSeconds={timerType.initialValue * 60} />
      <StartButton />
    </View>
  );
};

const styles = StyleSheet.create({
  actions: {
    width: "80%",
    backgroundColor: "#14458080",
    borderColor: "#144580",
    paddingVertical: 24,
    paddingHorizontal: 24,
    borderRadius: 32,
    borderWidth: 2,
  },
  buttonsActions: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
    fontSize: 12.5,
    padding: 8,
  },
  contextButtonAtive: {
    backgroundColor: "#144480",
    borderRadius: 10,
    padding: 4,
  },
});
