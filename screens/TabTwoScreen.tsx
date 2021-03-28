import * as React from "react";
import { useEffect, useState } from 'react';
import {
  StyleSheet,
  Image,
  ScrollView,
  SafeAreaView,
  TextInput,
  FlatList,
  ActivityIndicator
} from "react-native";

import EditScreenInfo from "../components/EditScreenInfo";
import { Text, View } from "../components/Themed";

export default function TabTwoScreen() {
  const [text, setText] = useState(""); //Nav Bar Var

  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [data2, setData2] = useState([]);
  const [data3, setData3] = useState([]);

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/tv/popular?api_key=6e11b2fc6fea6cebf32db4c122dab303&language=fr"
    )
      .then((response) => response.json())
      .then((json) => setData(json.results))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/tv/airing_today?api_key=6e11b2fc6fea6cebf32db4c122dab303&language=fr"
    )
      .then((response) => response.json())
      .then((json) => setData2(json.results))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/tv/on_the_air?api_key=6e11b2fc6fea6cebf32db4c122dab303&language=fr"
    )
      .then((response) => response.json())
      .then((json) => setData3(json.results))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.navbar}>
        <TextInput
          style={styles.search}
          onChangeText={(text) => setText(text)}
          defaultValue={text}
          placeholder="Rechercher sur AlloCiné"
        />
      </View>
      <ScrollView>
        <View style={{ marginLeft: 15, marginTop: 20 }}>
          
          <Text style={styles.title}>Series populaire</Text>
          <ScrollView horizontal={true}>
            <View style={{ flexDirection: "row" }}>
              {isLoading ? (
                <ActivityIndicator />
              ) : (
                <FlatList
                  numColumns={1001}
                  data={data}
                  keyExtractor={({ id }, index) => id}
                  renderItem={({ item }) => (
                    <View style={{ width: 150 }}>
                      <Image
                        style={styles.imgFilm}
                        source={{
                          uri:
                            "https://image.tmdb.org/t/p/w500" +
                            item.backdrop_path,
                        }}
                      />
                      <Text style={styles.titleFilm}>{item.name}</Text>
                      <Text style={styles.subTitleFilm}>
                        {item.first_air_date}
                      </Text>
                    </View>
                  )}
                />
              )}
            </View>
          </ScrollView>

          <Text style={styles.title}>Serie en direct aujourd'hui</Text>
          <ScrollView horizontal={true}>
            <View style={{ flexDirection: "row" }}>
              {isLoading ? (
                <ActivityIndicator />
              ) : (
                <FlatList
                  numColumns={1001}
                  data={data2}
                  keyExtractor={({ id }, index) => id}
                  renderItem={({ item }) => (
                    <View style={{ width: 150 }}>
                      <Image
                        style={styles.imgFilm}
                        source={{
                          uri:
                            "https://image.tmdb.org/t/p/w500" +
                            item.backdrop_path,
                        }}
                      />
                      <Text style={styles.titleFilm}>{item.name}</Text>
                      <Text style={styles.subTitleFilm}>
                        {item.first_air_date}
                      </Text>
                    </View>
                  )}
                />
              )}
            </View>
          </ScrollView>

          <Text style={styles.title}>Serie en ce moment</Text>
          <ScrollView horizontal={true}>
            <View style={{ flexDirection: "row" }}>
              {isLoading ? (
                <ActivityIndicator />
              ) : (
                <FlatList
                  numColumns={1001}
                  data={data3}
                  keyExtractor={({ id }, index) => id}
                  renderItem={({ item }) => (
                    <View style={{ width: 150 }}>
                      <Image
                        style={styles.imgFilm}
                        source={{
                          uri:
                            "https://image.tmdb.org/t/p/w500" +
                            item.backdrop_path,
                        }}
                      />
                      <Text style={styles.titleFilm}>{item.name}</Text>
                      <Text style={styles.subTitleFilm}>
                        {item.first_air_date}
                      </Text>
                    </View>
                  )}
                />
              )}
            </View>
          </ScrollView>
        </View>
      </ScrollView>
    </View>

    //https://api.themoviedb.org/3/movie/popular?api_key=6e11b2fc6fea6cebf32db4c122dab303&language=fr
  );
}

const styles = StyleSheet.create({
  searchSection: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  box: {
    marginBottom: 15,
  },
  imgFilm: {
    borderRadius: 10,
    width: "90%",
    height: 220,
    marginBottom: 5,
  },
  titleFilm: {
    marginTop: 5,
    marginBottom: 3,
    fontSize: 14,
    fontWeight: "800",
    width: "100%",
    textAlign: "center",
  },
  subTitleFilm: {
    marginBottom: 15,
    fontSize: 11,
    fontWeight: "700",
    width: "100%",
    color: "#8b8b8b",
    textAlign: "center",
  },
  navbar: {
    width: "100%",
    height: "10%",
    backgroundColor: "#fbd022",
  },
  search: {
    marginTop: "2%",
    borderWidth: 1,
    borderColor: "#eeecef",
    width: "85%",
    height: "55%",
    justifyContent: "center",
    marginLeft: "auto",
    marginRight: "auto",
    backgroundColor: "#eeedf2",
    borderRadius: 50,
    padding: 10,
  },
  container: {
    flex: 1,
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
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
  imgSalleCinema: {
    borderRadius: 10,
    width: 150,
    height: 100,
    marginBottom: 5,
  },
  imgRow: {
    borderRadius: 10,
    width: "96%",
    height: 120,
    marginBottom: 5,
  },
  title: {
    marginBottom: 15,
    fontSize: 24,
    fontWeight: "800",
    textAlign: "left",
  },
  title2: {
    marginBottom: 15,
    fontSize: 16,
    fontWeight: "800",
  },
  block: {
    marginLeft: 15,
    marginTop: 20,
    marginBottom: 140,
  },
});
