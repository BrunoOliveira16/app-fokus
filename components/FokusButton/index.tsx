import { Text, StyleSheet, Pressable } from "react-native";

export const FokusButton = () => {
  return (
    <Pressable style={styles.button}>
      <Text style={styles.buttonText}>Começar</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    padding: 8,
    gap: 10,
    borderRadius: 32,
    backgroundColor: "#B872FF",
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "600",
    color: "#021123",
  },
});
