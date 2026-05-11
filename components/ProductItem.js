import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function ProductItem({ item, deleteProduct }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{item.name}</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => deleteProduct(item.id)}
      >
        <Text style={styles.buttonText}>Eliminar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
    borderWidth: 1,
    padding: 10,
  },

  text: {
    fontSize: 18,
    marginBottom: 10,
  },

  button: {
    backgroundColor: "red",
    padding: 10,
    alignItems: "center",
  },

  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
});
