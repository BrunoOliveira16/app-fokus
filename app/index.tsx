import { useState } from "react";
import { View, StyleSheet, Image } from "react-native";

import { Timer } from "@/components/Timer";
import { Footer } from "@/components/Footer";
import { FokusButton } from "@/components/FokusButton";
import { ActionButton } from "@/components/ActionButton";

import { pomodoro } from "@/mock/index";

export default function Index() {
  const [timerType, setTimerType] = useState(pomodoro[0]);

  return (
    <View style={styles.container}>
      <Image source={timerType.image} />

      <View style={styles.actions}>
        <View style={styles.context}>
          {pomodoro.map((item) => (
            <ActionButton
              key={item.id}
              title={item.display}
              active={timerType.id === item.id}
              handlePress={() => setTimerType(item)}
            />
          ))}
        </View>

        <Timer totalSeconds={timerType.initialValue} />
        <FokusButton />
      </View>
      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 40,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#021123",
  },
  actions: {
    width: "80%",
    padding: 24,
    gap: 32,
    borderRadius: 32,
    borderWidth: 2,
    borderColor: "#144480",
    backgroundColor: "#14448080",
  },
  context: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
});
