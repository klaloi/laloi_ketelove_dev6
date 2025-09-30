// App.tsx
import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  StyleSheet,
} from "react-native";
import { pages, Page } from "./Data1";
import Card from "./Card";

export default function App() {
  const [selectedPage, setSelectedPage] = useState<Page | null>(null);

  // --- PAGE DE DÉTAIL AVEC BOUTON BACK FIXE ---
  if (selectedPage) {
    return (
      <View style={styles.pageContainer}>
        {/* Contenu défilable */}
        <ScrollView style={styles.pageScroll}>
          <Text style={styles.pageTitle}>{selectedPage.title}</Text>
          <Text style={styles.pageDescription}>
            {selectedPage.description}
          </Text>
        </ScrollView>

        {/* Bouton Back fixe */}
        <TouchableOpacity
          style={styles.fixedButton}
          onPress={() => setSelectedPage(null)}
        >
          <Text style={styles.buttonText}>⬅ Back</Text>
        </TouchableOpacity>
      </View>
    );
  }

  // --- PAGE PRINCIPALE ---
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Image source={require("./assets/Logo.jpg")} style={styles.logo} />
        <Text style={styles.headerTitle}>Sonar</Text>
      </View>

      {/* Bloc blanc */}
      <View style={styles.sidePlaceholder} />

      {/* Contenu principal */}
      <View style={styles.leftContent}>
        <Text style={styles.intro}>
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

const styles = StyleSheet.create({
  // ---------- Styles pour la page principale ----------
  container: {
    flexGrow: 1,
    backgroundColor: "#0e0131ff",
    padding: 20,
    alignItems: "center", // Centre le contenu horizontalement
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 40,
    marginBottom: 20,
    marginLeft:-200,
  },
  logo: {
    height: 70,
    width: 70,
    resizeMode: "contain",
    marginRight: 10,
    borderRadius: 50,
  },
  headerTitle: {
    color: "#fff",
    fontSize: 32,
    fontWeight: "bold",
  },
  sidePlaceholder: {
    backgroundColor: "#fff",
    width: "90%",
    height: 180,
    borderRadius: 8,
    marginBottom: 20,
    alignSelf: "center",
  },
  leftContent: {
    flex: 1,
    width: "100%", // occupe bien la largeur
  },
  intro: {
    fontSize: 18,
    fontWeight: "600",
    color: "#fff",
    marginBottom: 20,
    textAlign: "center",
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between", // espace horizontal automatique
  },
  cardWrapper: {
    width: "48%", // 2 colonnes
    marginBottom: 20,
  },

  // ---------- Styles pour la page de détail ----------
  pageContainer: {
    flex: 1,
    backgroundColor: "#fff",
  },
  pageScroll: {
    flex: 1,
    padding: 20,
  },
  pageTitle: {
    marginVertical: 20,
    fontSize: 28,
    fontWeight: "bold",
    color: "#250041",
  },
  pageDescription: {
    marginBottom: 80,
    fontSize: 16,
    lineHeight: 22,
    color: "#333",
  },
  fixedButton: {
    position: "absolute",
    bottom: 20,
    left: 20,
    right: 20,
    backgroundColor: "#250041",
    padding: 12,
    borderRadius: 8,
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "bold",
  },
});
