import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {screen} from "../utils"
import {CuentaScreen} from "../screens/cuenta/CuentaScreen"

const Stack = createNativeStackNavigator();

export function CuentaStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name={screen.cuenta.cuenta} component={CuentaScreen} options={{title:"Cuenta"}}/>
        </Stack.Navigator>
    )
}


