import { View } from 'react-native'
import React from 'react'
import { Input, Button } from "react-native-elements"
import { styles } from "./ChangeDisplayName.styles"

export function ChangeDisplayName() {
    return (
        <View style={styles.content}>
            <Input placeholder='Nombre y Apellido' rightIcon={{ type: "material-community", name: "account-circle-outline", color: "#c2c2c2" }} />
            <Button title="Cambiar nombre y apellido" containerStyle={styles.btnContainer} buttonStyle={styles.btn}/>
        </View>
    )
}