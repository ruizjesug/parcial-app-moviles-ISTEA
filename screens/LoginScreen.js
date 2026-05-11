import AsyncStorage from "@react-native-async-storage/async-storage";
import { useState } from "react";
import { Alert, Button, StyleSheet, Text, TextInput, View } from "react-native";

export default function LoginScreen({ navigation }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const loginUser = async () => {
    const data = await AsyncStorage.getItem("user");

    if (!data) {
      Alert.alert("Error", "No hay usuario registrado");
      return;
    }

    const user = JSON.parse(data);

    if (username === user.username && password === user.password) {
      navigation.navigate("Home");
    } else {
      Alert.alert("Error", "Usuario o contraseña incorrectos");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>

      <TextInput
        placeholder="Usuario"
        value={username}
        onChangeText={setUsername}
        style={styles.input}
      />

      <TextInput
        placeholder="Contraseña"
        secureTextEntry={true}
        value={password}
        onChangeText={setPassword}
        style={styles.input}
      />

      <Button title="Iniciar Sesión" onPress={loginUser} />

      <View style={styles.registerButton}>
        <Button
          title="Ir a Registro"
          onPress={() => navigation.navigate("Register")}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },

  title: {
    fontSize: 30,
    marginBottom: 20,
  },

  input: {
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
  },

  registerButton: {
    marginTop: 10,
  },
});
