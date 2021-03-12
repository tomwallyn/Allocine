import * as React from 'react';
import { useEffect, useState } from 'react';
import { StyleSheet, TouchableOpacity, TextInput, Image, FlatList, ActivityIndicator } from 'react-native';
import * as WebBrowser from 'expo-web-browser';
import Icon from 'react-native-vector-icons/FontAwesome';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { MonoText } from '../components/StyledText';
import Colors from '../constants/Colors';

export default function TabOneScreen({ path }: { path: string }) {
  const [text, setText] = useState(''); //Nav Bar Var

  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://api.themoviedb.org/3/movie/popular?api_key=6e11b2fc6fea6cebf32db4c122dab303&language=fr')
      .then((response) => response.json())
      .then((json) => setData(json.results))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);
  
  return (
    <View style={styles.container}>
      <View style={styles.navbar}>
      <TextInput
        style={styles.search}
        onChangeText={text => setText(text)}
        defaultValue={text}
        placeholder="Rechercher sur AlloCiné"
      />
      </View>

      <View style={{ marginLeft: 15, marginTop: 20}}>
      <View>
        <View style={{ marginBottom: 25 }}>
        <Text style={styles.title}>Salles de cinéma</Text>
        <View style={{ flexDirection:'row'}}>
          <View style={{width: '43%', height: '43%'}} >
            <Image
              style={styles.imgSalleCinema}
              source={require("../images/Map.png")}
            />
            <Text style={styles.title2}>À proximité</Text>
          </View>
          <View style={{width: '43%', height: '43%'}}>
            <Image
              style={styles.imgSalleCinema}
              source={require("../images/CineFav.png")}
            />
            <Text style={styles.title2}>Mes Cinémas</Text>
          </View>
        </View>
        </View>
        <View style={styles.box}>
        <Text style={styles.title}>Sortie de la semaine</Text>
          <View>
            <Image
              style={styles.imgRow}
              source={require("../images/SoriteSemaine.png")}
            />
        </View>
        </View>
      </View>
        
        {isLoading ? <ActivityIndicator/> : (
          <FlatList
          data={data}
          keyExtractor={({ id }, index) => id}
          renderItem={({ item }) => (
            <Text>{item.title}, {item.release_date}</Text>
          )}
        />
      )}
      </View>

    </View>

//https://api.themoviedb.org/3/movie/popular?api_key=6e11b2fc6fea6cebf32db4c122dab303&language=fr
 
  );
}

function handleHelpPress() {
  WebBrowser.openBrowserAsync(
    'https://docs.expo.io/get-started/create-a-new-app/#opening-the-app-on-your-phonetablet'
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
imgSalleCinema: {
  borderRadius: 10,
  width: 150,
  height: 100,
  marginBottom: 5,
},
imgRow: {
  borderRadius: 10,
  width: '96%',
  height: 120,
  marginBottom: 5,
},
title: {
  marginBottom: 15,
  fontSize: 24,
  fontWeight: "800",
  textAlign: "left"
},
title2: {
  marginBottom: 15,
  fontSize: 16,
  fontWeight: "800",
},
block: {
  marginLeft: 15,
  marginTop: 20,
 marginBottom: 140
},
});
