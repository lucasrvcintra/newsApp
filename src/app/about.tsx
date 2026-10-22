import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { useRouter } from "expo-router";
import { useTheme } from "expo-router/react-navigation";
import { SafeAreaView } from "react-native-safe-area-context";

import { ThemedView } from "@/components/ThemedView";

export default function AboutScreen() {
  const router = useRouter();
  const theme = useTheme();
  const secondaryTextColor = theme.dark ? "#d1d1d6" : "#555555";
  const borderColor = theme.dark ? "#48484a" : "#e5e5e5";
  const backgroundColor = theme.dark ? "#1c1c1e" : "#f5f5f7";

  function handleBack() {
    router.navigate("/(news)/technology");
  }

  return (
    <ThemedView style={[styles.container, { backgroundColor }]}>
      <SafeAreaView edges={["bottom", "left", "right"]} style={styles.content}>
        <View style={styles.infoArea}>
          <Image
            source={require("@/assets/images/sobre-news.png")}
            style={styles.image}
            resizeMode="contain"
          />

          <View style={[styles.divider, { backgroundColor: borderColor }]} />

          <Text style={[styles.description, { color: secondaryTextColor }]}>
            Esse é o Mini App de Notícias.
          </Text>
          <Text style={[styles.description, { color: secondaryTextColor }]}>
            Você vai praticar diferentes tipos de navegação com React-Native:
          </Text>

          <View style={styles.list}>
            <Text style={[styles.listItem, { color: secondaryTextColor }]}>
              • Drawer (raiz)
            </Text>
            <Text style={[styles.listItem, { color: secondaryTextColor }]}>
              • Tabs (Tecnologia/Esportes)
            </Text>
            <Text style={[styles.listItem, { color: secondaryTextColor }]}>
              • Stacks (Lista → Detalhes)
            </Text>
          </View>
        </View>

        <Pressable
          accessibilityRole="button"
          onPress={handleBack}
          style={({ pressed }) => [
            styles.backButton,
            pressed && styles.buttonPressed,
          ]}
        >
          <Text style={styles.backButtonText}>VOLTAR</Text>
        </Pressable>
      </SafeAreaView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    justifyContent: "space-between",
    padding: 24,
  },
  infoArea: {
    alignItems: "center",
  },
  image: {
    width: 140,
    height: 140,
    marginTop: 12,
    marginBottom: 24,
  },
  divider: {
    width: "100%",
    height: 1,
    marginBottom: 20,
  },
  description: {
    alignSelf: "flex-start",
    fontSize: 15,
    lineHeight: 22,
    marginBottom: 6,
  },
  list: {
    alignSelf: "flex-start",
    marginTop: 6,
    paddingLeft: 8,
    gap: 6,
  },
  listItem: {
    fontSize: 14,
    lineHeight: 20,
  },
  backButton: {
    alignSelf: "stretch",
    alignItems: "center",
    backgroundColor: "#2f66e8",
    borderRadius: 6,
    paddingVertical: 12,
  },
  backButtonText: {
    color: "#ffffff",
    fontSize: 14,
    fontWeight: "700",
  },
  buttonPressed: {
    opacity: 0.75,
  },
});
