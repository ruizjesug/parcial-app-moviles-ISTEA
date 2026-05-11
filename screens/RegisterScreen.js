import AsyncStorage from "@react-native-async-storage/async-storage";
import { useState } from "react";
import { Button, Text, TextInput, View } from "react-native";

export default function RegisterScreen({ navigation }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const saveUser = async () => {
    const user = {
      username,
      password,
    };

    await AsyncStorage.setItem("user", JSON.stringify(user));

    navigation.navigate("Login");
  };

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 30, marginBottom: 20 }}>Registro</Text>

      <TextInput
        placeholder="Usuario"
        value={username}
        onChangeText={setUsername}
        style={{
          borderWidth: 1,
          padding: 10,
          marginBottom: 10,
        }}
      />

      <TextInput
        placeholder="Contraseña"
        secureTextEntry={true}
        value={password}
        onChangeText={setPassword}
        style={{
          borderWidth: 1,
          padding: 10,
          marginBottom: 10,
        }}
      />

      <Button title="Registrarse" onPress={saveUser} />
    </View>
  );
}
