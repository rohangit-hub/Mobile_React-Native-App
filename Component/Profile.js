import { StatusBar } from 'expo-status-bar';
import {StyleSheet, Text, View, Image} from 'react-native';

export default Profile = () => {
    return (
        <View style={styles.MainContainer}>
            <StatusBar style='light'/>
            <View style={styles.ContaintArea}>
                <Text style = {styles.text}>Profile Stack Navigation</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    MainContainer: {
      flex: 1,
      // marginTop: 30,
    },

    ContaintArea:{
      flex: 15,
      backgroundColor: 'yellow',
    },
    text:{
      fontSize: 20,
      fontWeight: "bold",
      color:"black",
    }
  });