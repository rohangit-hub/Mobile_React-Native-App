import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { ScrollView } from 'react-native';
import { StyleSheet, Text, TextInput, View } from 'react-native';

export default BMI = () => {
  const [heightInCm, setHeightInCm] = useState("");
  const [weightInKg, setweightInKg] = useState("");
  const [BMI1, setBMI] = useState("");

  const culateData = () => {
    if (!heightInCm || !weightInKg) {
      alert('⚠️ All fields are required.');
    }
    else {
      const heightInM = (heightInCm) / 100;
      const bmiValue = (weightInKg / (heightInM * heightInM)).toFixed(1);

      let result = '';
      if (bmiValue < 18.5) {
        result = 'Underweight';
      } else if (bmiValue >= 18.5 && bmiValue <= 24.9) {
        result = 'Healthy';
      } else if (bmiValue >= 25 && bmiValue <= 29.9) {
        result = 'Overweight';
      } else if (bmiValue >= 30 && bmiValue <= 34.9) {
        result = 'Obese';
      } else if (bmiValue >= 35) {
        result = 'Extremely obese';
      }
      setBMI(`${bmiValue}   ${result}`);
      setTimeout(() => {
        setHeightInCm("");
        setweightInKg("");
        setBMI("")
      }, 10000);

    }
  }

  return (
    <ScrollView style={styles.MainContainer} >
      <StatusBar style='light' />
      <View style={styles.bmiHeader}>
        <Text style={styles.bmiHeading}>B M I</Text>
        <Text style={styles.bmiinfo}><Text style={{ color: "red" }}>C</Text>alculate <Text style={{ color: "red" }}>Y</Text>our <Text style={{ color: "red" }}>H</Text>ealth <Text style={{ color: "red" }}>H</Text>ere</Text>
      </View>

      <View style={styles.inputData}>
        <Text style={styles.inputDataHeader}>HEIGHT</Text>
        <View style={styles.inputcontainer}>
          <TextInput
            style={styles.formBlockUser}
            placeholder="Height In Cm"
            keyboardType='numeric'
            placeholderTextColor="white"
            value={heightInCm}
            onChangeText={newheightInCm => setHeightInCm(newheightInCm)}
          />
        </View>
      </View>


      <View style={styles.inputData}>
        <Text style={styles.inputDataHeader} >WEIGHT</Text>
        <View style={styles.inputcontainer}>
          <TextInput
            style={styles.formBlockUser}
            placeholder="Weight In Kilogram"
            keyboardType='numeric'
            placeholderTextColor="white"
            value={weightInKg}
            onChangeText={newweightInKg => setweightInKg(newweightInKg)}
          />
        </View>
      </View>

      <View style={styles.calcData}>
        <Text style={styles.calcDataHeader} onPress={culateData}>Calculate</Text>
      </View>

      <View style={styles.outputData}>
        <Text style={styles.outputDataHeader}>Your BMI {BMI1}</Text>
      </View>



    </ScrollView>
  )
}

const styles = StyleSheet.create({
  MainContainer: {
    backgroundColor: "#212121"
  },

  bmiHeading: {
    paddingTop: 40,
    fontSize: 50,
    fontWeight: "bold",
    height: 100,
    width: "100%",
    // backgroundColor: "red",
    color: "white",
    textAlign: "center",
    textAlignVertical: "center"

  },

  bmiinfo: {
    fontSize: 10,
    fontWeight: "bold",
    height: 50,
    width: "100%",
    // backgroundColor: "red",
    color: "white",
    textAlign: "center",
    textAlignVertical: "center"
  },

  inputData: {
    flex: 1,
    // backgroundColor: "green"
  },

  inputDataHeader: {
    padding: 10,
    marginTop: 10,
    flex: 1,
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    textAlignVertical: "center",
    // backgroundColor: "yellow"
  },

  inputcontainer: {
    flex: 1,
    paddingTop: 20,
    marginTop: 1,
    // backgroundColor: "red",
    flexDirection: "row",
    justifyContent: "space-evenly",

  },

  formBlockUser: {
    flex: 1,
    padding: 10,
    margin: 5,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "yellow",
    color: "red"
  },

  calcData: {
    flex: 1,
    // backgroundColor: "red"
  },

  calcDataHeader: {
    padding: 10,
    marginTop: 10,
    flex: 1,
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    textAlignVertical: "center",
    borderColor: "red",
    borderWidth: 2,
    borderRadius: 50,
    marginTop: 30,
    backgroundColor: "gray"
  },

  outputData: {
    flex: 1,
    marginTop: 10,
  },

  outputDataHeader: {
    flex: 1,
    padding: 10,
    marginTop: 10,
    color: "yellow",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    textAlignVertical: "center",
  }

});