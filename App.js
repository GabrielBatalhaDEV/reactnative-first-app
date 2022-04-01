import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import MyComponent from "./MyComponent";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>My First App</Text>
      <ScrollView>
        <MyComponent />
        <MyComponent />
        <MyComponent />
        <MyComponent />
        <MyComponent />
        <MyComponent />
        <MyComponent />
        <MyComponent />
        <MyComponent />
        <MyComponent />
        <MyComponent />
        <MyComponent />
        <MyComponent />
      </ScrollView>
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#2a2a2a",
    paddingTop: 50,
  },
  title: {
    color: "#fff",
    fontSize: 24,
    marginBottom: 24,
  },
});
