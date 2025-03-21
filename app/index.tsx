import { Text, View, StyleSheet, Image, Pressable } from "react-native";

export default function Index() {
  return (
    <View
      style={styles.container}
    >
      <Image source={require('./assets/pomodoro.png')}/>

      <View style={styles.actions}>
        <Text style={styles.timer}>25:40</Text>
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