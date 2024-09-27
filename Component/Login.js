import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, ImageBackground } from 'react-native';


export default function Login({ navigation }) {
  const signUpComponent = () => {
    navigation.navigate("SignUp")
  };

  const navigateFunction = () => {
    if (user === "R" & pass === "R") {
      console.warn(`Welcome :) ${user}`)
      navigation.navigate("Main")

    }
    else {
      if (!user || !pass) {
        setUser("");
        setPass("");
        console.warn(`User and Password Can not Be Blank`);
      }
      else {
        setUser("");
        setPass("");
        console.warn(`Wrong Username or Password`);
      }

    }
  };

  const secureTxt = () => {
    secure ? setSecure(false) : setSecure(true);
    if (secure === true) {
      setEye("🙂")
    }
    else {
      setEye("😌")
    }
  }

  const [user, setUser] = useState('');
  const [pass, setPass] = useState('');
  const [secure, setSecure] = useState(true);
  const [eye, setEye] = useState("😌");

  return (

    <View style={styles.Container}>
      <StatusBar style='light' />
      <ImageBackground source={require("./images/gym_1.jpg")} resizeMode="cover" style={styles.image}>

        <View style={styles.appName}>
          <Text style={styles.displayText}>G<Text style={styles.displayTextYYY}> ⅄ </Text>M</Text>
          <Text style={styles.displayTextContaint}>“Nothing will work unless you do.”</Text>
        </View>

        <View style={styles.userBlock}>
          <Text style={styles.formTextUser}>Username : </Text>
        </View>

        <View>
          <TextInput
            style={styles.formBlockUser}
            placeholder="Username ! !"
            placeholderTextColor="gray"
            value={user}
            onChangeText={newUser => setUser(newUser)}
          />
        </View>

        <View style={styles.passBlock}>
          <Text style={styles.formTextPass}>Password : </Text>
          <Text onPress={secureTxt} style={styles.eyes}>{eye}</Text>
        </View>

        <View>
          <TextInput
            style={styles.formBlockPass}
            placeholder="Password ! !"
            placeholderTextColor="gray"
            value={pass}
            secureTextEntry={secure}
            onChangeText={newpass => setPass(newpass)}
          />
        </View>

        <View style={styles.submitBlock}>
          <Text style={styles.joinText} onPress={navigateFunction}>Submit</Text>
          <Text style={styles.SignUpAsk}>Don't Have an Account?<Text style={styles.SignUpText} onPress={signUpComponent}> Sign Up!</Text></Text>
        </View>

      </ImageBackground>
    </View>
  );
};


const styles = StyleSheet.create({

  Container: {
    flex: 1,
  },

  appName: {
    flex: 3,
    alignItems: "center",
    justifyContent: "flex-end",
  },

  displayText: {
    color: 'yellow',
    margin: 1,
    fontSize: 60,
    fontWeight: "900",

  },

  displayTextYYY: {
    color: 'white',
    margin: 1,
    fontSize: 60,
    fontWeight: "900",
  },

  displayTextContaint: {
    color: '#680747',
    fontSize: 15,
    fontWeight: "bold",
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "gray",
    padding: 2,
    backgroundColor: "white"

  },

  userBlock: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-end",
    marginLeft: 30
  },

  passBlock: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
    marginLeft: 30,
    marginRight: 30,
    marginBottom: 5,

  },

  eyes: {
    alignSelf: "flex-end",
    textAlignVertical: "center",
    fontSize: 20,
    lineHeight: 35,
    marginLeft: 5,
    marginBottom: 5,
  },

  submitBlock: {
    flex: 2,
  },

  image: {
    flex: 1,
    justifyContent: 'center',
    resizeMode: "contain",
  },

  formTextUser: {
    color: 'yellow',
    margin: 2,
    fontSize: 25,
    fontWeight: "bold",
  },

  formTextPass: {
    color: 'yellow',
    margin: 2,
    fontSize: 25,
    fontWeight: "bold",
  },

  formBlockUser: {
    color: 'black',
    alignSelf: "center",
    textAlignVertical: "center",
    fontSize: 15,
    lineHeight: 20,
    fontWeight: 'bold',
    borderColor: "white",
    backgroundColor: "white",
    borderWidth: 1,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    marginTop: 5,
    width: "85%",
    height: 45,
    paddingVertical: 5,
    paddingHorizontal: 20,
  },

  formBlockPass: {
    color: 'black',
    alignSelf: "center",
    textAlignVertical: "center",
    fontSize: 15,
    lineHeight: 20,
    fontWeight: 'bold',
    borderColor: "white",
    backgroundColor: "white",
    borderWidth: 1,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    marginTop: 5,
    width: "85%",
    height: 45,
    paddingVertical: 5,
    paddingHorizontal: 20,
  },

  joinText: {
    color: 'yellow',
    textAlign: "center",
    textAlignVertical: "center",
    fontSize: 25,
    lineHeight: 35,
    fontWeight: 'bold',
    borderColor: "white",
    borderWidth: 1.5,
    borderRadius: 30,
    width: "50%",
    marginTop: 30,
    marginLeft: "25%",
  },

  SignUpAsk: {
    color: "white",
    alignSelf: "center",
    margin: 15,
    fontSize: 15,
  },

  SignUpText: {
    color: "yellow",
    alignSelf: "center",
    margin: 15,
    fontSize: 15,
    fontWeight: "bold"
  }

});