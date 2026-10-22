import { Stack } from "expo-router";
import { useTheme } from "expo-router/react-navigation";

export default function TechnologyStackLayout() {
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
          title: "Tecnologia",
        }}
      />
      <Stack.Screen
        name="[id]"
        options={{
          headerShown: true,
          title: "Detalhes da Notícia",
          headerBackTitle: "Voltar",
        }}
      />
    </Stack>
  );
}
