import { StyleSheet } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from './Pages/Home';
import Account from './Pages/Account';
import Wishlist from './Pages/Wishlist';


const Stack = createStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Account" component={Account}/>
        <Stack.Screen name="Wishlist" component={Wishlist}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

