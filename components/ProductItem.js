import { Button, Text, View } from "react-native";

export default function ProductItem({ item, deleteProduct }) {
  return (
    <View
      style={{
        marginBottom: 10,
        borderWidth: 1,
        padding: 10,
      }}
    >
      <Text style={{ fontSize: 18, marginBottom: 10 }}>{item.name}</Text>

      <Button title="Eliminar" onPress={() => deleteProduct(item.id)} />
    </View>
  );
}
