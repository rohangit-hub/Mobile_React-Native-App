import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { ScrollView } from 'react-native';
import { StyleSheet, Text, View, Image, TextInput, FlatList, Linking} from 'react-native';
import { Ionicons, FontAwesome, Entypo} from '@expo/vector-icons';

export default Home = ({ navigation }) => {
  const [search, setSearch] = useState("");
  const notify = () => {
    alert("⚠️ Under Construction ⚠️");
  }

  const Video = ()=>{
    navigation.navigate("Video")
  }

  const userStory = [
    {
      id: 1,
      name: "Rohan Tiwari",
      data: "A college student, conquered stress through daily gym sessions, discovering mental and physical strength, becoming an exemplar of collegiate fitness success."
    },

    {
      id: 2,
      name: "Divyanshu Agrey",
      data: "A middle-aged executive, prioritized fitness amidst a busy schedule. His commitment to weight training and healthy habits resulted in increased strength, weight loss."
    },

    {
      id: 3,
      name: "Amarjeet LNU",
      data: "Overcoming health setbacks, embraced a gym routine. With perseverance and guidance, he achieved a remarkable 50-pound weight loss, improved cardiovascular health."
    },

    {
      id: 4,
      name: "Kanak Lata",
      data: "A senior executive, defied age norms, achieving peak fitness with daily gym routines, showcasing that commitment surpasses obstacles in the pursuit of success."
    },

    {
      id: 5,
      name: "Pravesh Tyagi",
      data : "Overcoming health challenges, achieved a remarkable fitness journey, inspiring others with his perseverance and commitment to regular gym workouts"
    }
  ];

  return (

    <ScrollView>
      <StatusBar style='light' />
      <View>
        <Image style={{ height: 630, width: "100%" }} source={require("./images/gym_6.jpg")} />
        <View style={{ flex: 1, position: "absolute", marginTop: "80%", marginLeft: 10 }}>
          <Text style={styles.text}>Protect</Text>
          <Text style={styles.text}>Your <Text style={{ color: 'yellow' }}>Health !</Text></Text>
          <Text style={styles.text}>Companion</Text>
          <Text style={styles.description}>Elevate fitenes journey with cutting-edge</Text>
          <Text style={styles.description}>fuel your motivation and crush your goals here!</Text>
          <Text style={styles.joinText} onPress={notify}>Join Us <Text style={{ color: 'yellow' }}>!</Text></Text>
        </View>
      </View>

      <View style={{ height: 900, width: "100%", backgroundColor: "black" }}>
        <View style={styles.findYourWorkoutHeader}>
          <Text style={styles.findYourWorkoutHeaderText}><Text style={{ color: 'yellow', fontSize: 40 }}>F</Text>ind <Text style={{ color: 'yellow', fontSize: 40 }}>Y</Text>our <Text style={{ color: 'yellow', fontSize: 40 }}>W</Text>orkout</Text>
          <Text style={styles.findYourWorkoutHeaderText}><Text style={{ color: 'yellow', fontSize: 40 }}>C</Text>lass 🏋🏻 </Text>
        </View>

        <View style={styles.findYourWorkoutFind}>
          <TextInput
            style={styles.findYourWorkoutSearch}
            placeholder="🔍 Search Your Workout !!"
            placeholderTextColor="gray"
            value={search}
            onChangeText={newSearch => setSearch(newSearch)}
          />
          <Ionicons name="filter" size={40} color="yellow" style={styles.findYourWorkoutFilter} onPress={notify} />
        </View>

        <View style={styles.findYourWorkout}>
          {/* First set  */}
          <View style={styles.workoutDown}>
            <Image style={styles.workoutDownImg} source={require("./images/gym_2.jpg")} />
            <View style={styles.workoutDetailBlock}>
              <Text style={styles.workoutName}>Weight Training</Text>
              <Text style={styles.workoutVideos}>28 Workout</Text>
            </View>
            <FontAwesome name="arrow-circle-o-right" size={40} color="yellow" style={styles.findYourWorkoutFilter} onPress={Video}/>
          </View>
          <View style={styles.workoutUp}>
            <Image style={styles.workoutUpImg} source={require("./images/cardio.jpg")} />
            <View style={styles.workoutDetailBlock}>
              <Text style={styles.workoutName}>Cardio</Text>
              <Text style={styles.workoutVideos}>28 Workout</Text>
            </View>
            <FontAwesome name="arrow-circle-o-right" size={40} color="yellow" style={styles.findYourWorkoutFilter} onPress={Video} />
          </View>

          {/* Second set  */}
          <View style={styles.workoutDown}>
            <Image style={styles.workoutDownImg} source={require("./images/home.jpg")} />
            <View style={styles.workoutDetailBlock}>
              <Text style={styles.workoutName}>Home Workout</Text>
              <Text style={styles.workoutVideos}>28 Workout</Text>
            </View>
            <FontAwesome name="arrow-circle-o-right" size={40} color="yellow" style={styles.findYourWorkoutFilter} onPress={notify} />
          </View>
          <View style={styles.workoutUp}>
            <Image style={styles.workoutUpImg} source={require("./images/Yoga.png")} />
            <View style={styles.workoutDetailBlock}>
              <Text style={styles.workoutName}>Yoga</Text>
              <Text style={styles.workoutVideos}>28 Workout</Text>
            </View>
            <FontAwesome name="arrow-circle-o-right" size={40} color="yellow" style={styles.findYourWorkoutFilter} onPress={notify} />
          </View>

          {/* Third set  */}
          <View style={styles.workoutDown}>
            <Image style={styles.workoutDownImg} source={require("./images/personal.jpg")} />
            <View style={styles.workoutDetailBlock}>
              <Text style={styles.workoutName}>Personal Training</Text>
              <Text style={styles.workoutVideos}>28 Workout</Text>
            </View>
            <FontAwesome name="arrow-circle-o-right" size={40} color="yellow" style={styles.findYourWorkoutFilter} onPress={notify} />
          </View>
          <View style={styles.workoutUp}>
            <Image style={styles.workoutUpImg} source={require("./images/pysiotherapy.jpg")} />
            <View style={styles.workoutDetailBlock}>
              <Text style={styles.workoutName}>Physiotherapy</Text>
              <Text style={styles.workoutVideos}>28 Workout</Text>
            </View>
            <FontAwesome name="arrow-circle-o-right" size={40} color="yellow" style={styles.findYourWorkoutFilter} onPress={notify} />
          </View>

        </View>
      </View>

      <View style={styles.succesStoryBlock}>
        <View style={styles.succesStoryHeading}>
          <Text style={styles.succesStoryHeadingText}><Text style={{ color: 'yellow', fontSize: 40 }}>S</Text>ucess <Text style={{ color: 'yellow', fontSize: 40 }}>S</Text>tory</Text>
        </View>
        <View style={styles.succesStory}>

          <FlatList
            data={userStory}
            horizontal={true}
            renderItem={({item}) => 
            <View style={styles.storyBox}>
              <Text style={styles.storyName} numberOfLines={1} ellipsizeMode="tail">{item.name}</Text>
              <Text style={styles.storyData}>{item.data}</Text>
            </View>
            }
            keyExtractor={item => item.id}
          />
        </View>

      </View>

      <View style={styles.contactBlock}>
        <View style={styles.getInTouch}>
          <Text style={styles.getInTouch}>Get In Touch <Text style={{ color: 'orange',}}>!!</Text></Text>
          <Text style={styles.happyToConnect}>Hey' Looking forward to connect with you gyus.</Text>
        </View>
        <View style={styles.logos}>
        <Entypo name="facebook-with-circle" size={40} color="orange" style={styles.socialLogo} onPress={()=>Linking.openURL('https://www.facebook.com')}/>
        <Entypo name="instagram-with-circle" size={40} color="orange" style={styles.socialLogo} onPress={()=>Linking.openURL('https://www.instagram.com')}/>
        <Entypo name="twitter-with-circle" size={40} color="orange" style={styles.socialLogo} onPress={()=>Linking.openURL('https://www.telegram.com')}/>
        <FontAwesome name="telegram" size={40} color="orange" style={styles.socialLogo} onPress={()=>Linking.openURL('https://www.telegram.com')}/>
        </View>
      </View>

    </ScrollView>
  )
}

const styles = StyleSheet.create({

  image: {
    height: '100%',
    width: '100%',
  },

  text: {
    color: 'whitesmoke',
    fontSize: 50,
    lineHeight: 50,
    fontWeight: 'bold',
  },
  description: {
    color: 'whitesmoke',
    textAlign: 'center',
    margin: 6,
    lineHeight: 15,
    fontSize: 13,
  },

  joinText: {
    color: 'gray',
    textAlign: "center",
    textAlignVertical: "center",
    fontSize: 25,
    lineHeight: 35,
    fontWeight: 'bold',
    borderColor: "white",
    borderWidth: 1,
    borderRadius: 30,
    width: "50%",
    marginTop: 10,
    marginLeft: "25%",
  },

  testText: {
    color: 'red',
    textAlign: "center",
    fontSize: 25,
    lineHeight: 35,
  },

  findYourWorkoutHeader: {
    flex: 2,
    alignItems: "center",
    justifyContent: "center",

  },

  findYourWorkoutHeaderText: {
    color: "whitesmoke",
    fontSize: 30,
    fontWeight: "bold"

  },

  findYourWorkoutFind: {
    flex: 0.5,
    flexDirection: "row",
    paddingLeft: 15,

  },

  findYourWorkoutSearch: {
    flex: 3,
    height: "100%",
    borderColor: "white",
    borderWidth: 2,
    borderRadius: 25,
    paddingLeft: 15,
    paddingRight: 10,
    color: "white",
    fontSize: 15,
    fontWeight: "500"
  },

  findYourWorkoutFilter: {
    flex: 1,
    height: "100%",
    justifyContent: "center",
    textAlignVertical: "center",
    textAlign: "center",
  },

  findYourWorkout: {
    flex: 6,
    // backgroundColor : "red",
    marginTop: 10,
  },

  workoutDown: {
    // backgroundColor : "gray",
    flex: 1,
    margin: 10,
    borderColor: "gray",
    borderWidth: 2,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    flexDirection: "row"
  },

  workoutDetailBlock: {
    flex: 2,
    // backgroundColor : "red",
    margin: 5,
  },

  workoutName: {
    flex: 1,
    color: "white",
    textAlignVertical: "center",
    fontSize: 15,
    fontWeight: "bold",
  },

  workoutVideos: {
    flex: 1,
    color: "yellow",
    fontSize: 10,
    fontWeight: "bold",


  },

  workoutDownImg: {
    height: "90%",
    width: "30%",
    margin: 5,
    borderTopLeftRadius: 35,

  },

  workoutUp: {
    flex: 1,
    // backgroundColor : "gray",
    margin: 10,
    borderColor: "gray",
    borderWidth: 2,
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    flexDirection: "row"
  },

  workoutUpImg: {
    height: "90%",
    width: "30%",
    margin: 5,
    borderBottomLeftRadius: 35,

  },

  succesStoryBlock: {
    height: 400,
    width: "100%",
    // backgroundColor: "yellow"
  },

  succesStoryHeading: {
    flex: 1,
    backgroundColor: "black",
    justifyContent: "center",
  },

  succesStoryHeadingText: {
    color: "white",
    fontSize: 30,
    fontWeight: "bold",
    alignSelf: "center",
  },

  succesStory: {
    flex: 3,
    backgroundColor: "black",
  },

  storyBox: {
    borderColor: 'gray',
    margin: 10,
    padding : 10,
    height : '80%',
    width : 300,
    borderTopLeftRadius : 80,
    borderTopRightRadius : 10,
    borderBottomLeftRadius : 10,
    borderBottomRightRadius : 80,
    borderWidth : 2,
  },

  storyName:{
    fontSize : 25,
    fontWeight: "bold",
    color : "yellow",
    alignSelf : "center"
  },

  storyData:{
    fontSize : 16,
    fontWeight: "400",
    color : "white",
    alignSelf : "center"
  },

  contactBlock:{
    height: 200, 
    width: "100%", 
    // backgroundColor: "green",
  },
  getInTouch:{
    flex: 3,
    // backgroundColor : "#212121",
    color : "black",
    fontSize: 30,
    margin : 5,
    alignSelf: "center",
    textAlign : "center",
    fontWeight : "bold"
  },

  happyToConnect:{
    flex: 5,
    color : "black",
    fontSize: 11,
    margin : 2,
    alignSelf: "center",
    textAlign : "center",
  },

  logos:{
    flex: 1.5,
    backgroundColor : "#212121",
    flexDirection : "row",
    borderRadius : 50,
  },

  socialLogo:{
    flex: 1,
    // backgroundColor: "red",
    margin : 5,
    alignSelf: "center",
    textAlign : "center",
    
  }
});