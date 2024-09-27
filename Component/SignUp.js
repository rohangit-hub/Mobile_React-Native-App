import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, ImageBackground } from 'react-native';


export default function SignUp({ navigation }) {

  const navigateFunction = () => {
    if (pass===confirmPass && (user && fullName)) {
        navigation.navigate("Login")
    } 
    else {
        if ((!user || !fullName) || (!pass || !confirmPass)){
            setUser("");
            setPass("");
            setFullName("");
            setconfirmPass("");
            console.warn("Please Enter Required Details");
        } 
        else {
            setPass("");
            setconfirmPass("");
            console.warn("Confirm Password Do Not Match.")  
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

  const [fullName, setFullName] = useState('');
  const [user, setUser] = useState('');
  const [pass, setPass] = useState('');
  const [confirmPass, setconfirmPass] = useState('');
  const [secure, setSecure] = useState(true);
  const [eye, setEye] = useState("😌");

  return (

    <View style={styles.Container}>
      <StatusBar style='light' />
      <ImageBackground source={require("./images/gym_7.jpg")} resizeMode="cover" style={styles.image}>

        <View style={styles.appName}>
          <Text style={styles.displayText}>REGI<Text style={styles.displayTextYYY}>STRA</Text>TION</Text>
        </View>

        <View style={styles.userBlock}>
          <Text style={styles.formTextUser}>Fullname : </Text>
        </View>
        
        <View>
        <TextInput
          style={styles.formBlockUser}
          placeholder="Username ! !"
          placeholderTextColor="gray"
          value={fullName}
          onChangeText={newfullName => setFullName(newfullName)}
        />
        </View>

        <View style={styles.userBlock}>
          <Text style={styles.formTextUser}>Username </Text>
        </View>

        <View>
        <TextInput
          style={styles.formBlockPass}
          placeholder="Username ! !"
          placeholderTextColor="gray"
          value={user}
          onChangeText={newUser => setUser(newUser)}
        />
        </View>

        <View style={styles.passBlock}>
        <Text style={styles.formTextPass}>Password : </Text>
        </View>

        <View>
          <TextInput
            style={styles.formBlockUser}
            placeholder="Password ! !"
            placeholderTextColor="gray"
            value={pass}
            secureTextEntry={secure}
            onChangeText={newpass => setPass(newpass)}
          /> 
        </View>

        <View style={styles.passBlock}>
        <Text style={styles.formTextPass}>Confirm Password : </Text>
        <Text onPress={secureTxt} style={styles.eyes}>{eye}</Text>
        </View>

        <View>
          <TextInput
            style={styles.formBlockPass}
            placeholder="Password ! !"
            placeholderTextColor="gray"
            value={confirmPass}
            secureTextEntry={secure}
            onChangeText={newConfirmpass => setconfirmPass(newConfirmpass)}
          /> 
        </View>
        

        <View style={styles.submitBlock}>
          <Text style={styles.joinText} onPress={navigateFunction}>Sign Up</Text>
        </View>

      </ImageBackground>
    </View>
  );
};


const styles = StyleSheet.create({

  Container: {
    flex: 1,
    backgroundColor: "yellow",
  },

  appName:{
    flex:2,
    alignItems: "center",
    justifyContent : "flex-end",
  },

  displayText:{
    color: 'white',
    margin: 1,
    fontSize: 30,
    fontWeight: "900",

  },

  displayTextYYY:{
    color: 'yellow',
    margin: 1,
    fontSize: 30,
    fontWeight: "900",
  },

  userBlock:{
    flex:1,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-end",
    marginLeft: 30
  },

  passBlock:{
    flex:1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
    marginLeft: 30,
    marginRight: 30, 
    marginBottom: 5,
  },

  eyes:{
    alignSelf: "flex-end",
    textAlignVertical: "center",
    fontSize: 20,
    lineHeight: 35,
    marginLeft: 5,
    marginBottom: 5,
  },

  submitBlock:{
    flex:2,
  },

  image: {
    flex: 1,
    justifyContent: 'center',
    resizeMode : "contain",
  },

  formTextUser: {
    color: 'yellow',
    margin: 2,
    fontSize: 20,
    fontWeight: "bold",
  },

  formTextPass: {
    color: 'yellow',
    margin: 2,
    fontSize: 20,
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
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 30,
    width: "50%",
    marginTop: 30,
    marginLeft: "25%",
  },

});