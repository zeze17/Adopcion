import React from 'react'
import { View, ScrollView } from 'react-native'
import { Text, Button, Image} from 'react-native-elements'
import { styles } from './UserGuestScreen.styles'
import { screen } from '../../../utils';
import { useNavigation } from "@react-navigation/native"

export function UserGuestScreen() {

  const navigation = useNavigation();

  const goToLogin = () => {
    navigation.navigate(screen.cuenta.login)
  }

  return (
    <ScrollView centerContent={true} style={styles.content}>
      <Image source = {require("../../../../assets/img/adopta-no-compres.png")} style= {styles.image}/>
      <Text style= {styles.title}>Consulta tu perfil </Text>
      <Text style= {styles.descripcion}>
        ¿Te gustaria adoptar? animate a  conocer nuestras macotas 
        de forma sencilla puedes adoptar y descubir un mundo de posibilidades
      </Text>
      <Button title="Ver tu perfil" onPress={goToLogin} buttonStyle={styles.buttonStyle}/>
      
    </ScrollView>
  )
}