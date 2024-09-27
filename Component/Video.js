import { StatusBar } from 'expo-status-bar';
import {StyleSheet, Text, View} from 'react-native';

export default Video = () => {
    return (
        <View style={styles.MainContainer}>
            <StatusBar style='light'/>
            <View style={styles.ContaintArea}>
                <Text style = {styles.text}>Video Stack Navigation</Text>
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