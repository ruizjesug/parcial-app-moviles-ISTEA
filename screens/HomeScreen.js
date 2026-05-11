import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";
import { Button, FlatList, Text, View } from "react-native";

import ProductItem from "../components/ProductItem";

export default function HomeScreen({ navigation }) {
  const [products, setProducts] = useState([]);

  const loadProducts = async () => {
    const data = await AsyncStorage.getItem("products");

    if (data) {
      setProducts(JSON.parse(data));
    }
  };

  const deleteProduct = async (id) => {
    const filteredProducts = products.filter((item) => item.id !== id);

    setProducts(filteredProducts);

    await AsyncStorage.setItem("products", JSON.stringify(filteredProducts));
  };

  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      loadProducts();
    });

    return unsubscribe;
  }, [navigation]);

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 30, marginBottom: 20 }}>Lista de Compras</Text>

      <Button
        title="Agregar Producto"
        onPress={() => navigation.navigate("AddProduct")}
      />

      <FlatList
        style={{ marginTop: 20 }}
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ProductItem item={item} deleteProduct={deleteProduct} />
        )}
        ListEmptyComponent={<Text>No hay productos agregados</Text>}
      />
    </View>
  );
}
