import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { LogBox } from "react-native";
import {NavigationContainer} from "@react-navigation/native"
import {AppNavigation} from "./src/navigation/AppNavigation"
import Toast from "react-native-toast-message"; 
import {initFirebase} from "./src/utils";
import 'react-native-gesture-handler';

LogBox.ignoreAllLogs();

export default function App() {
  return (
      <>
        <NavigationContainer>
          <AppNavigation />
        </NavigationContainer>
        <Toast/>
      </>
  );
}

