import * as React from 'react';
import { Text, View, StyleSheet,TextInput, TouchableOpacity, Image } from 'react-native';
import {Header} from 'react-native-elements'
import db from './localDB'


export default class App extends React.Component {
constructor() {
  super()
  this.state = {text : "",chunks : []} 
  
}
  render() {
    return (
      <View style={styles.container}>
     <Header

     backgroundColor = {'blue'}
     centerComponent = {
       {text : 'Monkey Chunky',
       style :{color : 'black',
       fontSize :20}

       }
       }
     >
     </Header>

     <Image style = {styles.Icon} source={{
 uri:"https://www.shareicon.net/data/128x128/2015/08/06/80805_face_512x512.png"
     }}></Image>




<TextInput style = {styles.inputbox}
onChangeText = {(text)=>{
  this.setState({text:text})
}}
value = {this.state.text}>

</TextInput>

<TouchableOpacity style = {styles.goButton}

onPress = {()=>{this.setState({chunks : db[this.state.text].chunks})}}>
<Text>Go</Text>

</TouchableOpacity>
<View>
  {this.state.chunks.map(item=>{
    return(<TouchableOpacity style = {styles.chunkButton}>
<Text style = {styles.dispText}>{item}</Text>
    </TouchableOpacity>)

  })}
</View>



      </View>
    );
  }
}

const styles = StyleSheet.create({
 container: {
    flex: 1,
  
  },
  inputbox: {
marginTop : 200,
width : '40%',
height : 40,
alignSelf : 'center',
textAlign : 'center',
borderWidth : 2
  },

  goButton: {

width : '40%',
height : 30,
alignSelf : "center",
marginTop :20, 
fontSize: 20,

  },

Icon: {

  width:150,
  height:150,
  alignSelf:"center",

},

dispText: {

textAlign: "center",
fontSize:20,

},

chunkButton: {

  width: "60%",
  height: 50,
  justifyContent:"center",
  alignSelf:"center",
margin: 5,
backgroundColor: "black"
}





});
