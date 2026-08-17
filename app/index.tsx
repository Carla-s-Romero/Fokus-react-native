import { StyleSheet, View, Image } from "react-native";
import pomodoro from './ultis/pomodoro'
import { TextFooter } from './components/Footer'
import { ActionsButtons } from './components/ActionsButtons/index'
import { ImageApp } from "./components/Image";
import { useState } from "react";

export default function Index() {
  const [timerType, setTimerType] = useState(pomodoro[0])

  return (
    <View style={styles.container}>
      <ImageApp timerType={timerType} />
      <ActionsButtons timerType={timerType} setTimerType={setTimerType} />
      <TextFooter />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#021123",
    gap: 40
  },
  imagesTimer: {
    width: "100%",
    height: "50%",
  }
});