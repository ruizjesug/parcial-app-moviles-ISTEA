import AsyncStorage from "@react-native-async-storage/async-storage";
import * as Notifications from "expo-notifications";
import { useState } from "react";
import { Button, Text, TextInput, View } from "react-native";

export default function AddProductScreen({ navigation }) {
  const [product, setProduct] = useState("");

  Notifications.requestPermissionsAsync();

  const saveProduct = async () => {
    const data = await AsyncStorage.getItem("products");

    let products = [];

    if (data) {
      products = JSON.parse(data);
    }

    const newProduct = {
      id: Date.now().toString(),
      name: product,
    };

    products.push(newProduct);

    await AsyncStorage.setItem("products", JSON.stringify(products));

    await Notifications.scheduleNotificationAsync({
      content: {
        title: "Producto agregado",
        body: `${product} fue agregado a la lista`,
      },
      trigger: {
        seconds: 3,
      },
    });

    navigation.navigate("Home");
  };

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 30, marginBottom: 20 }}>Agregar Producto</Text>

      <TextInput
        placeholder="Nombre del producto"
        value={product}
        onChangeText={setProduct}
        style={{
          borderWidth: 1,
          padding: 10,
          marginBottom: 10,
        }}
      />

      <Button title="Guardar Producto" onPress={saveProduct} />
    </View>
  );
}
