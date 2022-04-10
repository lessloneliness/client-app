import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import React, { useState, useEffect } from 'react';
import * as ImagePicker from 'expo-image-picker';
import {
  useFonts,
  Inter_900Black,
  Inter_400Regular,
} from '@expo-google-fonts/inter';
import { IconButton, Colors, Button } from 'react-native-paper';
import { Picker } from '@react-native-picker/picker';

export const MainScreen = () => {
  const [image, setImage] = useState(null);
  const [selectedValue, setSelectedValue] = useState('java');
  let [fontsLoaded] = useFonts({
    Inter_900Black,
    myFont: require('../assets/fonts/RobotoCondensed-Italic.ttf'),
    Inter_400Regular,
  });

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  if (!fontsLoaded) {
    return <View />;
  }

  return (
    <ScrollView scrollEnabled={true}>
      <SafeAreaView style={styles.container}>
        <Text style={styles.title1}>Less lonlines</Text>
        <Text style={styles.title2}>
          "you cannot be lonely if you like the person your'e alone with."
        </Text>
        <Text style={styles.title3}>create profile</Text>
        <View>
          <IconButton
            style={styles.IconButton}
            icon='plus'
            color={Colors.white}
            size={40}
            onPress={pickImage}
          />

          <Image
            source={{
              uri: image
                ? image
                : 'https://images.assetsdelivery.com/compings_v2/yehorlisnyi/yehorlisnyi2104/yehorlisnyi210400016.jpg',
            }}
            style={styles.image}
          />
        </View>
        <Button
          mode='outlined'
          onPress={() => console.log('Pressed')}
          color={'green'}
          style={styles.button}
        >
          Bio
        </Button>
        <Button
          mode='outlined'
          onPress={() => console.log('Pressed')}
          color={'green'}
          style={styles.button}
        >
          Add user
        </Button>
        <Button
          mode='outlined'
          onPress={() => console.log('Pressed')}
          color={'green'}
          style={styles.button}
        >
          Create Group
        </Button>
        <Button
          mode='outlined'
          onPress={() => console.log('Pressed')}
          color={'green'}
          style={styles.button}
        >
          Create Event
        </Button>
        <Picker
          mode='dropdown'
          selectedValue={'My Friends'}
          style={styles.selector}
          onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
        >
          <Picker.Item label='My Friends' value='My Friends' />
          <Picker.Item label='Java' value='java' />
          <Picker.Item label='JavaScript' value='js' />
        </Picker>
        <Picker
          mode='dropdown'
          selectedValue={'My Groups'}
          style={styles.selector}
          onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
        >
          <Picker.Item label='My Groups' value='My Friends' />
          <Picker.Item label='Java' value='java' />
          <Picker.Item label='JavaScript' value='js' />
        </Picker>
        <Picker
          mode='dropdown'
          selectedValue={'Events'}
          style={styles.selector}
          onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
        >
          <Picker.Item label='Events' value='My Friends' />
          <Picker.Item label='Java' value='java' />
          <Picker.Item label='JavaScript' value='js' />
        </Picker>
      </SafeAreaView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    margin: '5%',
    marginTop: '15%',
  },
  title1: {
    color: '#2c964f',
    fontSize: 30,
    fontFamily: 'Inter_900Black',
  },
  title2: {
    color: '#012916',
    fontSize: 20,
    fontFamily: 'myFont',
    margin: 10,
    textAlign: 'center',
  },
  title3: {
    color: '#0a7c30',
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  IconButton: {
    backgroundColor: 'orange',
    position: 'absolute',
    bottom: '2%',
    left: '2%',
  },
  image: {
    width: 300,
    height: 200,
    zIndex: -1,
    borderWidth: 1,
    borderColor: 'grey',
  },
  button: {
    borderWidth: 1,
    borderColor: 'grey',
    width: 150,
    marginTop: '5%',
  },
  selector: {
    height: 50,
    width: 150,
    marginTop: 20,
    //backgroundColor: 'red',
  },
});
