import * as React from "react";
import { StyleSheet, TouchableOpacity, Image } from "react-native";
import * as WebBrowser from "expo-web-browser";

import EditScreenInfo from "../components/EditScreenInfo";
import { Text, View } from "../components/Themed";
import { MonoText } from "../components/StyledText";
import Colors from "../constants/Colors";

export default function TabOneScreen({ path }: { path: string }) {
  return (
    <View style={styles.container}>
      <View style={styles.block}>
        <Text style={styles.title}>Salles de cinéma</Text>
        <View style={{flex: 1, flexDirection:'row'}}>
          <View style={{width: 170, height: 150}} >
            <Image
              style={styles.imgSalleCinema}
              source={require("../image/Map.png")}
            />
            <Text style={styles.title2}>À proximité</Text>
          </View>
          <View style={{width: 170, height: 150}}>
            <Image
              style={styles.imgSalleCinema}
              source={require("../image/CineFav.png")}
            />
            <Text style={styles.title2}>Mes Cinémas</Text>
          </View>
        </View>
      </View>
      <View style={styles.block}>
        <Text style={styles.title}>Sortie de la semaine</Text>
    
          <View  >
            <Image
              style={styles.imgRow}
              source={require("../image/SoriteSemaine.png")}
            />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column"
  },
  imgSalleCinema: {
    borderRadius: 10,
    width: 150,
    height: 100,
    marginBottom: 5,
  },
  imgRow: {
    borderRadius: 10,
    width: 360,
    height: 120,
    marginBottom: 5,
  },
  title: {
    marginBottom: 15,
    fontSize: 27,
    fontWeight: "800",
  },
  title2: {
    marginBottom: 15,
    fontSize: 18,
    fontWeight: "800",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
  block: {
    marginLeft: 15,
    marginTop: 20,
   marginBottom: 140
  },
  developmentModeText: {
    marginBottom: 20,
    fontSize: 14,
    lineHeight: 19,
    textAlign: "center",
  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    alignItems: "center",
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: "contain",
    marginTop: 3,
    marginLeft: -10,
  },
  getStartedContainer: {
    alignItems: "center",
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: "rgba(96,100,109, 0.8)",
  },
  codeHighlightContainer: {
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    lineHeight: 24,
    textAlign: "center",
  },
  helpContainer: {
    marginTop: 15,
    marginHorizontal: 20,
    alignItems: "center",
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    textAlign: "center",
  },
});
