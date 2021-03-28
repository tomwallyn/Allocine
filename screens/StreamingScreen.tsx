import * as React from "react";
import { useEffect, useState } from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  Image,
  StatusBar,
  ScrollView,
  SafeAreaView,
  TextInput
} from "react-native";
import * as WebBrowser from "expo-web-browser";

import EditScreenInfo from "../components/EditScreenInfo";
import { Text, View } from "../components/Themed";
import { MonoText } from "../components/StyledText";
import Colors from "../constants/Colors";

export default function StreamingScreen({ path }: { path: string }) {

  const [text, setText] = useState(''); //Nav Bar Var

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.navbar}>
      <TextInput
        style={styles.search}
        onChangeText={text => setText(text)}
        defaultValue={text}
        placeholder="Rechercher sur AlloCiné"
      />
      </View>
      <ScrollView style={styles.block}>
        <Text style={styles.title}>Plateformes</Text>

        <View style={{backgroundColor: 'transparent'}}>
          <Image style={styles.imgRow} source={require("../images/disney.png")}/>
        </View>
        <View style={{backgroundColor: 'transparent'}}>
          <Image style={styles.imgRow} source={require("../images/netflix.png")}/>
        </View>
        <View style={{backgroundColor: 'transparent'}}>
          <Image style={styles.imgRow} source={require("../images/canal.png")} />
        </View>
        <View style={{backgroundColor: 'transparent'}}>
          <Image style={styles.imgRow} source={require("../images/prime.png")} />
        </View>
        <View style={{backgroundColor: 'transparent'}}>
          <Image style={styles.imgRow} source={require("../images/ocn.png")} />
        </View>
        <View style={{backgroundColor: 'transparent'}}>
          <Image style={styles.imgRow} source={require("../images/apple.png")} />
        </View>
        <View style={{backgroundColor: 'transparent'}}>
          <Image style={styles.imgRow} source={require("../images/salto.png")} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  searchSection: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  navbar: {
    width: '100%',
    height: '10%',
    backgroundColor: '#fbd022'
  },
  search: {
    marginTop: '2%',
    borderWidth: 1,
    borderColor: '#eeecef',
    width: '85%',
    height: '55%',
    justifyContent: 'center',
    marginLeft: 'auto',
    marginRight: 'auto',
    backgroundColor: '#eeedf2',
    borderRadius: 50,
    padding: 10,
  },
  imgSalleCinema: {
    borderRadius: 10,
    width: 150,
    height: 100,
    marginBottom: 5,
  },
  imgRow: {
    borderRadius: 10,
    width: '96%',
    height: 100,
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
