import "./global.css";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { AuthProvider } from "../context/AuthContext";

export default function RootLayout() {
  return (
    <AuthProvider>
      <StatusBar style="light" />
      <Stack
        screenOptions={{
          headerShown: false,
          contentStyle: { backgroundColor: "#99CCCC" },
        }}
      >
        <Stack.Screen name="(tabs)" />
        <Stack.Screen name="(auth)/giris" />
        <Stack.Screen name="set-ekle" options={{ presentation: "modal" }} />
        <Stack.Screen name="tamamlandi" options={{ gestureEnabled: false }} />
      </Stack>
    </AuthProvider>
  );
}