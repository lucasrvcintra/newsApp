import { FlatList, StyleSheet, Text, View } from "react-native";
import { useRouter } from "expo-router";
import { useTheme } from "expo-router/react-navigation";
import { SafeAreaView } from "react-native-safe-area-context";

import { NewsCard } from "@/components/NewsCard";
import { ThemedView } from "@/components/ThemedView";
import { getNewsByCategory } from "@/data/newsData";

export default function TechnologyScreen() {
  const router = useRouter();
  const theme = useTheme();
  const newsList = getNewsByCategory("TECNOLOGIA");
  const textColor = theme.dark ? "#ffffff" : "#171717";
  const borderColor = theme.dark ? "#48484a" : "#e5e5e5";
  const backgroundColor = theme.dark ? "#1c1c1e" : "#f5f5f7";

  return (
    <ThemedView style={[styles.container, { backgroundColor }]}>
      <SafeAreaView edges={["bottom", "left", "right"]} style={styles.safeArea}>
        <View style={[styles.header, { borderBottomColor: borderColor }]}>
          <Text style={[styles.sectionTitle, { color: textColor }]}>
            Tecnologia
          </Text>
        </View>

        <FlatList
          data={newsList}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <NewsCard
              item={item}
              onPress={() =>
                router.push({
                  pathname: "/(news)/technology/[id]",
                  params: { id: item.id },
                })
              }
            />
          )}
          contentContainerStyle={styles.listContent}
          showsVerticalScrollIndicator={false}
        />
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
  header: {
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 10,
    borderBottomWidth: 1,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: "700",
  },
  listContent: {
    padding: 16,
    paddingBottom: 24,
  },
});
