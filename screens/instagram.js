import React, { Component } from 'react';
import { Button, View, Text ,StyleSheet,Image} from 'react-native';



export default class Instagram extends React.Component{


render(){
return(
<View style={styles.null1}>

<Image source={require("./assets/zero.png")} />
<Text style={{fontSize:20,fontFamily:"AppleSDGothicNeo-Bold",alignSelf:"center"}}>Instagram</Text>

</View>
);

}

  
}

const styles=StyleSheet.create({
null:{


},
null1:{

    shadowColor:"black",
    shadowOffset:{height:50,width:50},
    shadowOpacity:50,
    

}

  
})

