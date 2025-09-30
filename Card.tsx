import React, { useEffect, useRef } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Animated } from "react-native";

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

  //Fonction pour rendre le contenu avec chiffres plus gros
  const renderContent = (content: string) => {
    const parts = content.split(" ");
    return (
      <Text style={styles.cardContent}>
        {parts.map((part, index) => {
          if (/\d/.test(part)) {
            return (
              <Text key={index} style={styles.numberText}>
                {part}{" "}
              </Text>
            );
          }
          return (
            <Text key={index} style={styles.normalText}>
              {part}{" "}
            </Text>
          );
        })}
      </Text>
    );
  };

  return (
    <TouchableOpacity
      style={[styles.card, fixedHeight ? { height: fixedHeight } : undefined]}
      onPress={onPress}
      activeOpacity={0.8}
    >
      <View style={styles.topRow}>
        <View style={styles.left}>
          <Text style={styles.cardTitle}>{title}</Text>
          {renderContent(content)}
        </View>

        {circle ? (
          <View style={styles.right}>
            <View style={styles.circleBadge}>
              <Text style={styles.circleText}>{circle}</Text>
            </View>
          </View>
        ) : progress !== undefined ? (
          <View style={styles.progressWrapper}>
            <View style={[styles.circleBase, { borderColor: "#eee" }]} />
            <Animated.View
              style={[
                styles.circleProgress,
                {
                  borderColor: color || "#4CAF50",
                  transform: [{ rotate: spin }],
                },
              ]}
            />
            <View style={styles.centerText}>
              <Text style={styles.percentText}>{Math.round(progress * 100)}%</Text>
            </View>
          </View>
        ) : null}
      </View>

      {description && <View style={styles.description}>{description}</View>}
    </TouchableOpacity>
  );
}

const SIZE = 40; //Taille du diametre du cercle de progression

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#f9f9f9",
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
    color: "#250041",
  },
  cardContent: {
    fontSize: 14,
    color: "#333",
    marginTop: 4,
  },
  numberText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#250041",
  },
  normalText: {
    fontSize: 14,
    color: "#333",
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
    color: "#250041",
  },
  circleBadge: {
    backgroundColor: "#dae2ddff",
    borderRadius: 20,
    paddingHorizontal: 12,
    paddingVertical: 6,
  },
  circleText: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#0e0131ff",
  },
  description: {
    marginTop: 10,
  },
});
