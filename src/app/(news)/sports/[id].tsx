import { useLayoutEffect } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { useLocalSearchParams, useNavigation } from "expo-router";
import { useTheme } from "expo-router/react-navigation";
import { SafeAreaView } from "react-native-safe-area-context";

import { ThemedView } from "@/components/ThemedView";
import { getNewsById } from "@/data/newsData";

export default function SportsDetailScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const navigation = useNavigation();
  const theme = useTheme();

  const item = id ? getNewsById(id) : undefined;

  useLayoutEffect(() => {
    if (item) {
      navigation.setOptions({
        title: item.title,
      });
    }
  }, [navigation, item]);

  const textColor = theme.dark ? "#ffffff" : "#171717";
  const secondaryTextColor = theme.dark ? "#d1d1d6" : "#555555";
  const borderColor = theme.dark ? "#48484a" : "#e5e5e5";
  const backgroundColor = theme.dark ? "#1c1c1e" : "#f5f5f7";

  if (!item) {
    return (
      <ThemedView style={[styles.container, { backgroundColor }]}>
        <SafeAreaView style={styles.centered}>
          <Text style={[styles.notFoundText, { color: textColor }]}>
            Notícia não encontrada.
          </Text>
        </SafeAreaView>
      </ThemedView>
    );
  }

  return (
    <ThemedView style={[styles.container, { backgroundColor }]}>
      <SafeAreaView edges={["bottom", "left", "right"]} style={styles.safeArea}>
        <ScrollView
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
        >
          <Text style={[styles.category, { color: secondaryTextColor }]}>
            {item.category}
          </Text>
          <Text style={[styles.title, { color: textColor }]}>{item.title}</Text>
          <View style={[styles.divider, { backgroundColor: borderColor }]} />
          <Text style={[styles.content, { color: textColor }]}>
            {item.content}
          </Text>
        </ScrollView>
      </SafeAreaView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  safeArea: {
    flex: 1,
  },
  scrollContent: {
    padding: 20,
    paddingBottom: 40,
  },
  category: {
    fontSize: 12,
    fontWeight: "700",
    letterSpacing: 0.8,
    marginBottom: 8,
  },
  title: {
    fontSize: 20,
    fontWeight: "700",
    lineHeight: 26,
    marginBottom: 14,
  },
  divider: {
    height: 1,
    marginBottom: 16,
  },
  content: {
    fontSize: 15,
    lineHeight: 24,
  },
  centered: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  notFoundText: {
    fontSize: 15,
  },
});
