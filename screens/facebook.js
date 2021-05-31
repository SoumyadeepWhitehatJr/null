import React, { Component } from 'react';
import { Button, View, Text ,StyleSheet,Image} from 'react-native';



export default class Facebook extends React.Component{


render(){
return(
<View style={styles.null1}>

<Image style={styles.null}source={require("https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg")} />
<Text style={{fontSize:20,fontFamily:"AppleSDGothicNeo-Bold",alignSelf:"center"}}>Facebook</Text>

</View>
);

}

  
}

const styles=StyleSheet.create({
null:{

height:100,
width:100

},
null1:{

    shadowColor:"black",
    shadowOffset:{height:50,width:50},
    shadowOpacity:50,
    

}

  
})

