import { StyleSheet, View, Pressable, Text } from "react-native";
import pomodoro from "../../ultis/pomodoro";
import { Timer } from "../CountTimer/index";
import { StartButton } from "../StartButton";
import { useRef, useState } from "react";

export const ActionsButtons = ({ timerType, setTimerType }) => {

  const [timerRunning, setTimerRunning] = useState(false)
  const [seconds, setSeconds] = useState(pomodoro[0].initialValue)

  const timeRef = useRef(null)

  const clear = () => {
    if (timeRef.current != null) {
      clearInterval(timeRef.current)
        timeRef.current = null
        setTimerRunning(false)
    }
  }

  const toggleTimerType = (newTimerTyper) => {
      setTimerType(newTimerTyper)
      setSeconds(newTimerTyper.initialValue)
      clear()
  }

  const toggleTimer = () => {
    if (timeRef.current) {
      clear()
      return
    }
    setTimerRunning(true)
    const id = setInterval(() => {
      setSeconds(oldState => {
        if (oldState === 0) {
          clear()
          return 0
        }

        return oldState - 1
      })
      console.log('time rolando')
    }, 100)
    timeRef.current = id 
  }

  return (
    <View style={styles.actions}>
      <View style={styles.buttonsActions}>
        {pomodoro.map((p) => (
          <Pressable
            key={p.id}
            style={timerType.id === p.id ? styles.contextButtonAtive : null}
            onPress={() => toggleTimerType(p)}
          >
            <Text style={styles.buttonText}>{p.display}</Text>
          </Pressable>
        ))}
      </View>

      <Timer totalSeconds={seconds * 60} />
      <StartButton 
        title={ timerRunning ? 'Pausar' : 'Começar' }
        onPress={toggleTimer}/>
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
