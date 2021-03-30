import * as React from 'react';
import { useEffect, useState } from 'react';
import { StyleSheet, TouchableOpacity, TextInput, Image, FlatList, ActivityIndicator } from 'react-native';
import * as WebBrowser from 'expo-web-browser';
import Icon from 'react-native-vector-icons/FontAwesome';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { MonoText } from '../components/StyledText';
import Colors from '../constants/Colors';
import { ScrollView } from 'react-native-gesture-handler';

export default function DetailsScreen({route, navigation}) {

  const { itemId } = route.params;

  const [text, setText] = useState(''); //Nav Bar Var

  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${JSON.stringify(itemId)}?api_key=6e11b2fc6fea6cebf32db4c122dab303&language=fr`)
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.navbar}>
      
      </View>
      <ScrollView>

        <View style={{ marginTop: 13, flexDirection: 'row', marginLeft: 10 }} >
          <Image
            style={styles.imgFilm}
            source={{
              uri:
                "https://image.tmdb.org/t/p/w500" +
                data.poster_path,
            }}
          />
          <View>
            <Text style={styles.title}>{data.title}</Text>
            <View style={{ flexDirection: 'row', marginTop: 10, }}>
              <Text style={{ marginLeft: 15, fontSize: 12, fontWeight: "800", color: 'grey' }}>De </Text>
              <Text style={styles.title2}>Réalisateur</Text>
            </View>
            <View style={{ flexDirection: 'row', marginTop: 6 }}>
              <Text style={{ marginLeft: 15, fontSize: 13, fontWeight: "800", color: 'grey', }}>Sortie </Text>
              <Text style={styles.title2}>{data.release_date}</Text>
              <Text style={styles.sousTitre} > | Durée </Text>
              <Text style={styles.title2}>{data.runtime} min</Text>
            </View>
          </View>
        </View>
        <View>
          <Image
            style={{ width: '100%', height: 220, marginTop: 10 }}
            source={require("../images/VIDEO.png")}
          />
        </View>
        <View style={{ marginTop: 15, marginLeft: 20 }}>
          <Text style={styles.sousTitre}>
            Film | {data.original_language}
          </Text>
          <View style={{ flexDirection: 'row', marginTop: 10, }}>
            <Text style={{ fontSize: 13, fontWeight: "800", color: 'grey' }}>Titre VO </Text>
            <Text style={styles.title2}>{data.original_title} </Text>
          </View>

          <Text style={{ marginTop: 20, marginRight: 10, fontSize: 17, fontWeight: "600" }}>
            {data.overview}
          </Text>
        </View>
      </ScrollView>

    </View>

  );
}


const styles = StyleSheet.create({
  searchSection: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  box: {
    marginBottom: 15
  },
  navbar: {
    width: '100%',
    height: '7%',
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
  container: {
    flex: 1,
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  developmentModeText: {
    marginBottom: 20,
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    lineHeight: 24,
    textAlign: 'center',
  },
  helpContainer: {
    marginTop: 15,
    marginHorizontal: 20,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    textAlign: 'center',
  },
  imgFilm: {
    borderRadius: 10,
    width: 85,
    height: 125,
    marginBottom: 5,
  },
  imgRow: {
    borderRadius: 10,
    width: '96%',
    height: 120,
    marginBottom: 5,
  },
  title: {

    marginLeft: 15,
    fontSize: 19,
    fontWeight: "800",
  },
  retour: {
    marginTop:35,
    marginLeft: 15,
    fontSize: 19,
    fontWeight: "800",
  },
  title2: {
    fontSize: 13,
    fontWeight: "800",
  },
  sousTitre: {
    fontSize: 13,
    fontWeight: "800",
    color: 'grey'
  },
  block: {
    marginLeft: 15,
    marginTop: 20,
    marginBottom: 140
  },
});
