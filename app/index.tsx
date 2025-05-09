import { useRef, useState } from "react";
import { View, StyleSheet, Image, ImageSourcePropType } from "react-native";

import { Timer } from "@/components/Timer";
import { Footer } from "@/components/Footer";
import { FokusButton } from "@/components/FokusButton";
import { ActionButton } from "@/components/ActionButton";
import { IconPause, IconPlay } from "@/components/Icons";

import { pomodoro } from "@/mock/index";

type timerTypeProps = {
  id: string;
  initialValue: number;
  image: ImageSourcePropType;
  display: string;
};

export default function Index() {
  const [timerType, setTimerType] = useState<timerTypeProps>(pomodoro[0]);
  const [seconds, setSeconds] = useState(pomodoro[0].initialValue);
  const [timerRunning, setTimerRunning] = useState(false);

  const timerRef = useRef<number | null>(null);

  const clear = () => {
    if (timerRef.current !== null) {
      clearInterval(timerRef.current);
      timerRef.current = null;
      setTimerRunning(false);
    }
  };

  const toogleTimerType = (newTimerType: timerTypeProps) => {
    setTimerType(newTimerType);
    setSeconds(newTimerType.initialValue);
    clear();
  };

  const toogleTimer = () => {
    if (timerRef.current) {
      clear();
      return;
    }

    setTimerRunning(true);

    const id = setInterval(() => {
      setSeconds((oldState) => {
        if (oldState === 0) {
          clear();
          return timerType.initialValue;
        }
        return oldState - 1;
      });
    }, 1000) as unknown as number;
    timerRef.current = id;
  };

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
              handlePress={() => toogleTimerType(item)}
            />
          ))}
        </View>

        <Timer totalSeconds={seconds} />
        <FokusButton
          title={timerRunning ? "Pausar" : "Começar"}
          icon={timerRunning ? <IconPause /> : <IconPlay />}
          handlePress={toogleTimer}
        />
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
