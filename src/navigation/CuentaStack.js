import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {screen} from "../utils"
import {CuentaScreen} from "../screens/cuenta/CuentaScreen"
import {LogginScreen} from "../screens/cuenta/loginScreen"
import {RegisterScreen} from "../screens/cuenta/registerScreen"


const Stack = createNativeStackNavigator();

export function CuentaStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name={screen.cuenta.cuenta} component={CuentaScreen} options={{title:"Cuenta"}}/>
            <Stack.Screen name={screen.cuenta.login} component={LogginScreen} options={{title:"Iniciar Sesion"}}/>
            <Stack.Screen name={screen.cuenta.register} component={RegisterScreen} options={{title:"Registrar Usuario"}}/>

        </Stack.Navigator>
    )
}


