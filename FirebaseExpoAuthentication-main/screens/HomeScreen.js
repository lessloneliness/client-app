import { useNavigation } from "@react-navigation/core";
import React from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  TextInput,
} from "react-native";
import { Button } from "react-native";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { auth } from "../firebase";
import * as ImagePicker from "expo-image-picker";

export default function App() {
  const [bio, setBio] = useState("details");
  const [image, setImage] = useState(null);

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

  return (
    <View style={styles.container}>
      <View style={styles.body}></View>
      <Text style={styles.text}>Less Lonlines</Text>
      <Text
        style={{
          color: "black",
          fontSize: 20,
          textAlign: "center",
          margin: 10,
          fontStyle: "italic",
        }}
      >
        “ You cannot be lonely if you like the person you’re alone with .”
      </Text>
      <Text
        style={{
          color: "red",
          fontSize: 20,
          textAlign: "center",
          margin: 10,
          fontStyle: "italic",
        }}
      >
        Create Profile
      </Text>
      <Button title={"Add Photo"} onPress={pickImage}></Button>
      <Image
        style={{ width: 200, height: 150 }}
        source={{ uri: image }}
      ></Image>
      <Text>Enter bio</Text>
      <Text>Bio:{bio}</Text>
      <TextInput
        style={styles.input}
        placeholder="bio details"
        onChangeText={(val) => setBio(val)}
      />
      <Button
        title={"Add User"}
        onPress={() => {
          alert("presed");
        }}
      ></Button>
      <Button
        style={styles.button}
        title={"Create Group"}
        onPress={() => {
          alert("presed");
        }}
      ></Button>
      <Button
        title={"Create Event"}
        onPress={() => {
          alert("presed");
        }}
      ></Button>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 400,
    height: 400,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 30,
    margin: 10,
    color: "green",
    fontStyle: "italic",
  },

  input: {
    borderWidth: 1,
    borderColor: "#777",
    padding: 8,
    margin: 10,
    width: 200,
  },
  button: {
    marginTop: 10,
  },
});
