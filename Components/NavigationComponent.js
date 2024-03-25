import {
    Pressable,
    StyleSheet,
    View,
  } from "react-native";

import { useNavigation } from "@react-navigation/native";


  import { Entypo } from '@expo/vector-icons';
  import { FontAwesome } from '@expo/vector-icons';
  import { MaterialIcons } from '@expo/vector-icons';
  

const NavigationComponent = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
        <Pressable onPress={() => {navigation.navigate("Home")}}>
        <Entypo name="home" size={24} color="white" />
        </Pressable>
        <Pressable>
        <FontAwesome name="search" size={24} color="white" />
        </Pressable>
        <Pressable onPress={() => {navigation.navigate("Account")}}>
        <MaterialIcons name="account-circle" size={24} color="white" />
        </Pressable>
        <Pressable onPress={() => {navigation.navigate("Wishlist")}}>
        <MaterialIcons name="favorite" size={24} color="white" />
        </Pressable>
    </View>
  )
}

export default NavigationComponent

const styles = StyleSheet.create({
    container : {
        width: 300,
        height: 50,
        backgroundColor:'black',
        marginBottom: 30,
        borderRadius: 40,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        paddingHorizontal: 20
        
    }
})