import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  StyleSheet,
  useColorScheme,
} from "react-native";
import { pages, Page } from "./Data1";
import Card from "./Card";

export default function App() {
  const [selectedPage, setSelectedPage] = useState<Page | null>(null);
  const colorScheme = useColorScheme();
  const isDarkMode = colorScheme === "dark";

  // Choix du logo selon le mode
  const logoSource = isDarkMode
    ? require("./assets/LogoDark.png")
    : require("./assets/LogoLigth.png");

  // --- PAGE DE DÉTAIL ---
  if (selectedPage) {
    return (
      <View style={[styles.pageContainer, { backgroundColor: isDarkMode ? "#250041" : "#fff" }]}>
        <ScrollView style={styles.pageScroll}>
          <Text style={[styles.pageTitle, { color: isDarkMode ? "#fff" : "#250041" }]}>
            {selectedPage.title}
          </Text>
          <Text style={[styles.pageDescription, { color: isDarkMode ? "#ddd" : "#250041" }]}>
            {selectedPage.description}
          </Text>
        </ScrollView>

        {/* Bouton Back fixe */}
        <TouchableOpacity
          style={[styles.fixedButton, { backgroundColor: isDarkMode ? "#fff" : "#250041" }]}
          onPress={() => setSelectedPage(null)}
        >
          <Text style={[styles.buttonText, { color: isDarkMode ? "#250041" : "#fff" }]}>
            ⬅ Back
          </Text>
        </TouchableOpacity>
      </View>
    );
  }

  // --- PAGE PRINCIPALE ---
  return (
    <ScrollView
      contentContainerStyle={[styles.container, { backgroundColor: isDarkMode ? "#0e0131" : "#f3f3f3" }]}
    >
      {/* Header */}
      <View style={styles.header}>
        <Image source={logoSource} style={styles.logo} />
        <Text style={[styles.headerTitle, { color: isDarkMode ? "#fff" : "#250041" }]}>Sonar</Text>
      </View>

      {/* Bloc placeholder — visible dans les deux modes */}
      <View
        style={[
          styles.sidePlaceholder,
          {
            backgroundColor: isDarkMode ? "#fff" : "#250041",
            borderWidth: 1,
            borderColor: isDarkMode ? "#999" : "#aaa",
          },
        ]}
      />

      {/* Contenu principal */}
      <View style={styles.leftContent}>
        <Text style={[styles.intro, { color: isDarkMode ? "#fff" : "#250041" }]}>
          Resulting in more secure, reliable, and{"\n"}maintainable software.
        </Text>

        {/* Grille de cartes */}
        <View style={styles.grid}>
          {pages.map((page) => (
            <View key={page.id} style={styles.cardWrapper}>
              <Card
                title={page.title}
                content={page.content}
                circle={page.circle}
                progress={page.progress}
                color={page.color}
                onPress={() => setSelectedPage(page)}
              />
            </View>
          ))}
        </View>
      </View>
    </ScrollView>
  );
}

// ---------- Styles ----------
const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    alignItems: "center",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 40,
    marginBottom: 20,
    marginLeft: -200,
  },
  logo: {
    height: 70,
    width: 70,
    resizeMode: "contain",
    marginRight: 10,
    borderRadius: 50,
  },
  headerTitle: {
    fontSize: 32,
    fontWeight: "bold",
  },
  sidePlaceholder: {
    width: "90%",
    height: 180,
    borderRadius: 8,
    marginBottom: 20,
    alignSelf: "center",
  },
  leftContent: {
    flex: 1,
    width: "100%",
  },
  intro: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 20,
    textAlign: "center",
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  cardWrapper: {
    width: "48%",
    marginBottom: 20,
  },
  pageContainer: {
    flex: 1,
  },
  pageScroll: {
    flex: 1,
    padding: 20,
  },
  pageTitle: {
    marginVertical: 20,
    fontSize: 28,
    fontWeight: "bold",
  },
  pageDescription: {
    marginBottom: 80,
    fontSize: 16,
    lineHeight: 22,
  },
  fixedButton: {
    position: "absolute",
    bottom: 20,
    left: 20,
    right: 20,
    padding: 12,
    borderRadius: 8,
  },
  buttonText: {
    textAlign: "center",
    fontWeight: "bold",
  },
});
