import React, { useEffect, useRef } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Animated, useColorScheme } from "react-native";

type CardProps = {
  title: string;
  content: string;
  circle?: string;
  progress?: number; 
  color?: string;
  onPress: () => void;
  description?: React.ReactNode;
  fixedHeight?: number;
};

export default function Card({
  title,
  content,
  circle,
  progress,
  color,
  onPress,
  description,
  fixedHeight,
}: CardProps) {
  const rotateAnim = useRef(new Animated.Value(0)).current;
  const colorScheme = useColorScheme();
  const isDarkMode = colorScheme === "dark";

  useEffect(() => {
    if (progress !== undefined) {
      Animated.timing(rotateAnim, {
        toValue: progress * 180,
        duration: 800,
        useNativeDriver: true,
      }).start();
    }
  }, [progress]);

  const spin = rotateAnim.interpolate({
    inputRange: [0, 180],
    outputRange: ["0deg", "180deg"],
  });

  const renderContent = (content: string) => {
    const parts = content.split(" ");
    return (
      <Text style={[styles.cardContent, { color: isDarkMode ? "#ddd" : "#333" }]}>
        {parts.map((part, index) => {
          if (/\d/.test(part)) {
            return (
              <Text
                key={index}
                style={[styles.numberText, { color: isDarkMode ? "#fff" : "#250041" }]}
              >
                {part}{" "}
              </Text>
            );
          }
          return (
            <Text
              key={index}
              style={[styles.normalText, { color: isDarkMode ? "#ccc" : "#333" }]}
            >
              {part}{" "}
            </Text>
          );
        })}
      </Text>
    );
  };

  return (
    <TouchableOpacity
      style={[
        styles.card,
        { backgroundColor: isDarkMode ? "#1c0750" : "#f9f9f9" },
        fixedHeight ? { height: fixedHeight } : undefined,
      ]}
      onPress={onPress}
      activeOpacity={0.8}
    >
      <View style={styles.topRow}>
        <View style={styles.left}>
          <Text style={[styles.cardTitle, { color: isDarkMode ? "#fff" : "#250041" }]}>{title}</Text>
          {renderContent(content)}
        </View>

        {circle ? (
          <View style={styles.right}>
            <View
              style={[
                styles.circleBadge,
                { backgroundColor: isDarkMode ? "#55338d" : "#dae2ddff" },
              ]}
            >
              <Text
                style={[styles.circleText, { color: isDarkMode ? "#fff" : "#0e0131ff" }]}
              >
                {circle}
              </Text>
            </View>
          </View>
        ) : progress !== undefined ? (
          <View style={styles.progressWrapper}>
            <View
              style={[
                styles.circleBase,
                { borderColor: isDarkMode ? "#555" : "#eee" },
              ]}
            />
            <Animated.View
              style={[
                styles.circleProgress,
                {
                  borderColor: color || (isDarkMode ? "#9b5de5" : "#4CAF50"),
                  transform: [{ rotate: spin }],
                },
              ]}
            />
            <View style={styles.centerText}>
              <Text
                style={[styles.percentText, { color: isDarkMode ? "#fff" : "#250041" }]}
              >
                {Math.round(progress * 100)}%
              </Text>
            </View>
          </View>
        ) : null}
      </View>

      {description && <View style={styles.description}>{description}</View>}
    </TouchableOpacity>
  );
}

const SIZE = 40; // Diamètre du cercle de progression

const styles = StyleSheet.create({
  card: {
    padding: 15,
    borderRadius: 12,
    marginBottom: 10,
    marginHorizontal: 4,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    height: 120,
  },
  topRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  left: {
    flex: 1,
  },
  right: {
    justifyContent: "center",
    alignItems: "center",
  },
  cardTitle: {
    fontWeight: "bold",
    fontSize: 16,
  },
  cardContent: {
    fontSize: 14,
    marginTop: 4,
  },
  numberText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  normalText: {
    fontSize: 14,
  },
  progressWrapper: {
    width: SIZE,
    height: SIZE,
    justifyContent: "center",
    alignItems: "center",
  },
  circleBase: {
    position: "absolute",
    width: SIZE,
    height: SIZE,
    borderRadius: SIZE / 2,
    borderWidth: 8,
  },
  circleProgress: {
    position: "absolute",
    width: SIZE,
    height: SIZE,
    borderRadius: SIZE / 2,
    borderWidth: 8,
    borderRightColor: "transparent",
    borderBottomColor: "transparent",
  },
  centerText: {
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
  },
  percentText: {
    fontWeight: "bold",
  },
  circleBadge: {
    borderRadius: 20,
    paddingHorizontal: 12,
    paddingVertical: 6,
  },
  circleText: {
    fontSize: 14,
    fontWeight: "bold",
  },
  description: {
    marginTop: 10,
  },
});
