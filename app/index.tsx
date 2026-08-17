import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import { Timer } from "./Timer"
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import pomodoro from './pomodoro'


export default function Index() {
  const [timerType, setTimerType] = useState(pomodoro[0])

  return (
    <View style={styles.container}>
      <Image
        style={styles.imagesTimer}
        source={timerType.image}
      />

      <View style={styles.actions}>
          <View style={styles.buttonsActions}>
              {pomodoro.map (p => (
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

          <View>
              <Pressable style={styles.startTimerButton}>
                  <Ionicons name="play" size={22} color="#000" />
                  <Text style={styles.startTimerText}>Começar</Text>
              </Pressable>
          </View>
      </View>

      <View style={styles.footer}>
         <Text style={styles.footerText}>Projeto fictício e sem fins comerciais.</Text>
         <Text style={styles.footerText}>Desenvolvido por Alura. </Text>

      </View>
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
  text: {
    color: "#fff",
    fontSize: 18,
  },
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
  contextButtonAtive:{
    backgroundColor: "#144480",
    borderRadius: 10,
    padding: 4
  },
  countTime: {
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 54,
    margin: 32,
  },
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
  },
  footer: {
    width: "80%",
  },
  footerText: {
    color: "#98A0A8",
    textAlign: "center",
    fontSize: 12.5
  },
  imagesTimer: {
    width: "100%",
    height: "50%",
  }
});