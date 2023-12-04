import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {screen} from "../utils"
import {AnimalesScreen} from "../screens/animales/AnimalesScreen"
import DrawerNavigator from '../../src/screens/animales/HomeScreen';
import DetailsScreen from '../../src/screens/animales/DetailsScreen'

const Stack = createNativeStackNavigator();

export function AnimalStack() {
    return (
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name={screen.animales.home} component={DrawerNavigator} />
            <Stack.Screen name={screen.animales.detail} component={DetailsScreen} />
            <Stack.Screen name={screen.animales.animales} component={AnimalesScreen} options={{title:"Animales"}}/>
        </Stack.Navigator>
    )
}


