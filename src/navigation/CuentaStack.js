import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { screen } from "../utils";
import { CuentaScreen } from "../screens/cuenta/CuentaScreen";
import { LogginScreen } from "../screens/cuenta/loginScreen";
import { RegisterScreen } from "../screens/cuenta/registerScreen";
import { AnimalStack } from "./animalesStack";
import DetailsScreen from "../screens/animales/DetailsScreen";

const Stack = createNativeStackNavigator();

export function CuentaStack() {
  return (
    <Stack.Navigator initialRouteName={screen.cuenta.cuenta}>
      <Stack.Screen
        name={screen.cuenta.cuenta}
        component={CuentaScreen}
        options={{
          headerShown: false,
          title: "Cuenta",
        }}
      />
      <Stack.Screen
        name={screen.cuenta.login}
        component={LogginScreen}
        options={{ title: "Iniciar Sesion" }}
      />
      <Stack.Screen
        name={screen.cuenta.register}
        component={RegisterScreen}
        options={{ title: "Registrar Usuario" }}
      />
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="animalsStack"
        component={AnimalStack}
      />
      <Stack.Screen name="detailsScreen" component={DetailsScreen} />
    </Stack.Navigator>
  );
}
