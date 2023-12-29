import React from 'react'
import { View } from 'react-native'
import { Button} from 'react-native-elements'
import {InfoUser} from "../../../components/account"
import {getAuth, signOut} from 'firebase/auth'
import { styles } from './UserLoggerScreen.styles'

export function UserLoggerScreen() {

  const logOut = async () => {
    const auth = getAuth();
    await signOut(auth);
  }

  return (
    <View style={styles.content}>
        <InfoUser/>

        <Button title="Cerrar Sesion"
         buttonStyle={styles.button}
          titleStyle={styles.btnTitles}
          onPress={logOut}
         />
    </View>
  )
}