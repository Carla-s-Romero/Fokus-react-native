import { StyleSheet, View, Text } from "react-native";

export const TextFooter = () => {
  return (
    <View style={styles.footer}>
      <Text style={styles.footerText}>
        Projeto fictício e sem fins comerciais.
      </Text>
      <Text style={styles.footerText}>Desenvolvido por Alura. </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    width: "80%",
  },
  footerText: {
    color: "#98A0A8",
    textAlign: "center",
    fontSize: 12.5,
  }
});
