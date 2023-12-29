import React from 'react'
import { View } from 'react-native'
import {Avatar, Text} from 'react-native-elements';
import {getAuth } from "firebase/auth";
import {styles} from "./InfoUser.styles"

export function InfoUser() {

  const {uid, photoURL, displayName,email} = getAuth().currentUser

  const cambiarAvatar = () =>{
    console.log("cambiar avatar")
  }

  return (
    <View style={styles.content}>
      <Avatar 
      size="large" 
      rounded 
      containerStyle={styles.avatar}
      icon={{type: "material", name: "person"}}
      //source={{uri:photoURL}}
      >
        <Avatar.Accessory size={24} onPress={cambiarAvatar} />
      </Avatar>

      <View>
        <Text style={styles.displayName}>{displayName || "Anonimo"}</Text>
        <Text style={styles.content}>{email}</Text>
      </View>
    </View>
  )
}