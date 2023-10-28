import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {Icon} from "react-native-elements"

import {CuentaStack} from "./CuentaStack"
import {AnimalStack} from "./animalesStack"
import {FormularioStack} from "./formularioStack"



import {screen} from "../utils"


const Tab = createBottomTabNavigator();

export function AppNavigation() {
    return (
        <Tab.Navigator screenOptions={({route}) => ({

            headerShown: false,
            tabBarActiveTintColor: "#000ba6",
            tabBarInactiveTintColor: "#646464",
            tabBarIcon: ({color,size}) => screenOptions(route, color, size)
        }
        )}>
            <Tab.Screen name={screen.cuenta.tab} component={CuentaStack} options={{title : "Cuenta"}} />
            <Tab.Screen name={screen.animales.tab} component={AnimalStack}  options={{title : "Animales"}}/>
            <Tab.Screen name={screen.formulario.tab} component={FormularioStack} options={{title : "Formulario"}} />
        </Tab.Navigator>
    );
}


function screenOptions(route, color, size){
    let iconName;

    if(route.name === screen.cuenta.tab){
        iconName = "account-circle";
    }
    if(route.name === screen.animales.tab){
        iconName = "dog-service";
    }
    if(route.name === screen.formulario.tab){
        iconName = "form-select";
    }
   
    return ( 
    <Icon type="material-community" name={iconName} color={color} size={size}/>
    );

}