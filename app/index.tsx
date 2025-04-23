import { useState } from "react";
import { Text, View, StyleSheet, Image, Pressable } from "react-native";

const pomodoro = [
  {
    id: 'focus',
    initialValue: 25,
    image: require('./assets/pomodoro.png'),
    display: 'Foco'
  },
  {
    id: 'short',
    initialValue: 5,
    image: require('./assets/short.png'),
    display: 'Pausa curta'
  },
  {
    id: 'long',
    initialValue: 15,
    image: require('./assets/long.png'),
    display: 'Pausa longa'
  }
]

export default function Index() {
  const [timerType, setTimerType] = useState(pomodoro[0])

  return (
    <View
      style={styles.container}
    >
      <Image source={timerType.image}/>

      <View style={styles.actions}>
        <View style={styles.context}>
          {pomodoro.map(item => (
            <Pressable 
              key={item.id}
              onPress={() => setTimerType(item)}
              style={ timerType.id === item.id ? styles.contextButtonActive : null}
            >
              <Text style={styles.contextButtonText}>{item.display}</Text>
            </Pressable>
          ))}
        </View>

        <Text style={styles.timer}>
          {new Date(timerType.initialValue * 1000).toLocaleTimeString('pt-BR', {minute: '2-digit', second: '2-digit'})}
        </Text>

        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>Começar</Text>
        </Pressable>
      </View>

      <View style={styles.footer}>
        <Text style={styles.footerText}>
          Projeto fictício e sem fins comerciais.
        </Text>
        <Text style={styles.footerText}>
          Desenvolvido por Alura.
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 40,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#021123"
  },
  actions: {
    width: '80%',
    padding: 24,
    gap: 32,
    borderRadius: 32,
    borderWidth: 2,
    borderColor: '#144480',
    backgroundColor: '#14448080'
  },
  context: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  contextButtonText: {
    fontSize: 12.5,
    color: '#FFF',
    padding: 8
  },
  contextButtonActive: {
    backgroundColor: '#144480',
    borderRadius: 8
  },
  timer: {
    fontSize: 54,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#FFF'
  },
  button: {
    alignItems: 'center',
    padding: 8,
    gap: 10,
    borderRadius: 32,
    backgroundColor: '#B872FF'
  },
  buttonText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#021123'
  },
  footer: {
    width: '80%'
  },
  footerText: {
    fontSize: 12.5,
    textAlign: 'center',
    color: '#98A0A8'
  }
})