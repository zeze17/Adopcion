import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {screen} from "../utils"
import {AnimalesScreen} from "../screens/animales/AnimalesScreen"

const Stack = createNativeStackNavigator();

export function AnimalStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name={screen.animales.animales} component={AnimalesScreen} options={{title:"Animales"}}/>
        </Stack.Navigator>
    )
}


