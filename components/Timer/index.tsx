import { Text, StyleSheet } from "react-native";

interface TimerProps {
  totalSeconds: number;
}

export const Timer = ({ totalSeconds }: TimerProps) => {
  const date = new Date(totalSeconds * 1000);

  return (
    <Text style={styles.timer}>
      {date.toLocaleTimeString("pt-BR", {
        minute: "2-digit",
        second: "2-digit",
      })}
    </Text>
  );
};

const styles = StyleSheet.create({
  timer: {
    fontSize: 54,
    fontWeight: "bold",
    textAlign: "center",
    color: "#FFF",
  },
});
