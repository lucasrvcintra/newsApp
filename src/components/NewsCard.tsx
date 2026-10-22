import { Pressable, StyleSheet, Text } from "react-native";
import { useTheme } from "expo-router/react-navigation";

import { NewsItem } from "@/types/news";

type NewsCardProps = {
  item: NewsItem;
  onPress: () => void;
};

export function NewsCard({ item, onPress }: NewsCardProps) {
  const theme = useTheme();
  const cardColor = theme.dark ? "#2c2c2e" : "#ffffff";
  const borderColor = theme.dark ? "#48484a" : "#e5e5e5";
  const secondaryTextColor = theme.dark ? "#d1d1d6" : "#555555";
  const textColor = theme.dark ? "#ffffff" : "#171717";

  return (
    <Pressable
      accessibilityRole="button"
      onPress={onPress}
      style={({ pressed }) => [
        styles.card,
        { backgroundColor: cardColor, borderColor },
        pressed && styles.cardPressed,
      ]}
    >
      <Text style={[styles.category, { color: secondaryTextColor }]}>
        {item.category}
      </Text>
      <Text style={[styles.title, { color: textColor }]}>{item.title}</Text>
      <Text style={[styles.description, { color: secondaryTextColor }]}>
        {item.description}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 10,
    borderWidth: 1,
    padding: 14,
    marginBottom: 12,
  },
  cardPressed: {
    opacity: 0.75,
  },
  category: {
    fontSize: 11,
    fontWeight: "700",
    letterSpacing: 0.5,
    marginBottom: 4,
  },
  title: {
    fontSize: 15,
    fontWeight: "700",
    marginBottom: 6,
    lineHeight: 20,
  },
  description: {
    fontSize: 13,
    lineHeight: 18,
  },
});
