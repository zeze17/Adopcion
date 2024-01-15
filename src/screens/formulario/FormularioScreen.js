import { View } from 'react-native'
import React from 'react'
import { useNavigation } from "@react-navigation/native"
import { Text, Button, Image} from 'react-native-elements'
import { screen } from '../../utils';


export  function FormularioScreen() {

  const navigation = useNavigation();

  const goToNuevoFormulario = () => {
    navigation.navigate(screen.formulario.nuevoFormulario)
  }


  return (
    <View>
      <Text>formulario</Text>
      <Button title="Nuevo Formulario" onPress={goToNuevoFormulario}/>

    </View>
  )
}