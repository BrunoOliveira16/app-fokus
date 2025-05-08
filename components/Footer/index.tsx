import { View, Text, StyleSheet } from "react-native";

export const Footer = () => {
  return (
    <View style={styles.footer}>
      <Text style={styles.footerText}>
        Projeto fictício e sem fins comerciais.
      </Text>
      <Text style={styles.footerText}>Desenvolvido por Alura.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    width: "80%",
  },
  footerText: {
    fontSize: 12.5,
    textAlign: "center",
    color: "#98A0A8",
  },
});
