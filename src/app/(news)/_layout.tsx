import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { useTheme } from "expo-router/react-navigation";

export default function NewsTabsLayout() {
  const theme = useTheme();
  const barColor = theme.dark ? "#1c1c1e" : "#ffffff";
  const borderColor = theme.dark ? "#48484a" : "#e5e5e5";

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#2f66e8",
        tabBarInactiveTintColor: theme.dark ? "#d1d1d6" : "#555555",
        tabBarStyle: {
          backgroundColor: barColor,
          borderTopColor: borderColor,
          height: 60,
          paddingBottom: 8,
          paddingTop: 6,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: "600",
        },
      }}
    >
      <Tabs.Screen
        name="technology"
        options={{
          title: "Tecnologia",
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? "hardware-chip" : "hardware-chip-outline"}
              size={22}
              color={typeof color === "string" ? color : undefined}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="sports"
        options={{
          title: "Esportes",
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? "trophy" : "trophy-outline"}
              size={22}
              color={typeof color === "string" ? color : undefined}
            />
          ),
        }}
      />
    </Tabs>
  );
}
