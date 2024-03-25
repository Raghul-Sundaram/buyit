
import { ScrollView, StyleSheet, Text, View } from "react-native";
import NavigationComponent from "../Components/NavigationComponent";


export default function Wishlist() 
{


        return(
            <View style={styles.container}>
                <ScrollView>
                <Text style={{fontSize: 20}}>Your Wishlists</Text>
                </ScrollView>
                <View>
                    <NavigationComponent/>
                </View>
            </View>
        )
}


const styles = StyleSheet.create({
    container: {
       flex: 1,
       alignItems:'center',
       justifyContent:'center' ,
       marginTop: 100
    }
})