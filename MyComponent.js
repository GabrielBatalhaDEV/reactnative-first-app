import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function MyComponent() {
  return (
    <View style={styles.card}>
      <Text style={styles.cardTitle}>React Native</Text>
      <Text style={styles.cardSubtitle}>
        Creating applications for Android and IOS
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    padding: 12,
    borderRadius: 3,
    marginVertical: 10,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  cardSubtitle: {
    color: "#2a2a2a",
    fontSize: 14,
  },
});
