import { ReactElement } from "react";
import { Text, StyleSheet, Pressable } from "react-native";

interface FokusButtonProps {
  title: string;
  icon: ReactElement;
  handlePress: () => void;
}

export const FokusButton = ({ title, icon, handlePress }: FokusButtonProps) => {
  return (
    <Pressable style={styles.button} onPress={handlePress}>
      {icon}
      <Text style={styles.buttonText}>{title}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 8,
    gap: 12,
    borderRadius: 32,
    backgroundColor: "#B872FF",
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "600",
    color: "#021123",
  },
});
