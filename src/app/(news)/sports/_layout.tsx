import { Stack } from "expo-router";
import { useTheme } from "expo-router/react-navigation";

export default function SportsStackLayout() {
  const theme = useTheme();

  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: theme.dark ? "#1c1c1e" : "#ffffff",
        },
        headerTintColor: theme.dark ? "#ffffff" : "#171717",
        headerTitleAlign: "left",
        headerBackTitle: "Voltar",
      }}
    >
      <Stack.Screen
        name="index"
        options={{
          headerShown: false,
          title: "Esportes",
        }}
      />
      <Stack.Screen
        name="[id]"
        options={{
          headerShown: true,
          title: "Detalhes da Notícia",
        }}
      />
    </Stack>
  );
}
