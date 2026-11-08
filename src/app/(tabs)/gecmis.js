import React from "react";
import { View, Text } from "react-native";

export default function gecmis() {
  return (
    <View style={{
      flex: 1,
      backgroundColor: "#101510",
      justifyContent: "center",
      alignItems: "center"
    }}>
      <Text style={{ color: "white", fontSize: 25 }}>
        Antrenman Geçmişi
      </Text>
    </View>
  );
}