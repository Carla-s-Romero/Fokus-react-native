import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function Index() {
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/images/logo.png")}
      />

      <View style={styles.actions}>
          <View style={styles.buttonsActions}>
               <Pressable onPress={() => console.log("Foco")}>
                  <Text style={styles.buttonText}>Foco</Text>
                </Pressable>

                <Pressable onPress={() => console.log("Pausa curta")}>
                  <Text style={styles.buttonText}>Pausa curta</Text>
                </Pressable>

                <Pressable onPress={() => console.log("Pausa longa")}>
                  <Text style={styles.buttonText}>Pausa longa</Text>
                </Pressable>
          </View>

          <View className="Time">
              <Text style={styles.countTime}>25:00</Text>
          </View>

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
    justifyContent: "center",
    gap: 16,
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
    fontSize: 12.5,
    gap: 8,
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
  }
});