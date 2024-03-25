import { Text, View , StyleSheet, Image, ScrollView} from "react-native";
import NavigationComponent from "../Components/NavigationComponent";


export default function Account() {

    const userDetails = 
        {
            Name: "RAGHUL S",
            Email: "sraghul550@gmail.com",
            Mobile: "+91 6384660602",
            Address: "1/10, Agraharam Street, Thimmachipuram, Kulithalai, Karur.",
            url: {uri:"https://img.freepik.com/free-photo/man-making-gossip-talking-about-secret-things_144627-53579.jpg?w=740&t=st=1711290751~exp=1711291351~hmac=8ab1d9f14ea638e6dbb5576cc20b7de6df4044f6c86fdb7fa5a1845f0e311553"}
        }
    


    return(
        <View style={styles.container}>
            <ScrollView>
            <View style={{flexDirection:'column',gap: 10, alignItems:'center', justifyContent:'center'}}>
                <Image source={userDetails.url} style={{height: 150, width: 150, borderRadius: 100}}  />
                <Text style={{fontSize: 30}} >{userDetails.Name}</Text>
                <Text style={{fontSize: 10, opacity: 0.7}}>{userDetails.Email}</Text>
                <Text style={{fontSize: 10, opacity: 0.7}}>{userDetails.Mobile}</Text>
                <Text style={{fontSize: 10, opacity: 0.7, width: 150, textAlign:'center'}}>{userDetails.Address}</Text>
            </View>
            <View style={{borderTopColor:'black',borderTopWidth:2, width: 300, marginTop: 20, padding: 10}}>
                <View>
                    <Text style={{fontSize: 20}}>Your Orders</Text>
                </View>
            </View>
            </ScrollView>
            <View>
                <NavigationComponent/>
            </View>
        </View>
    )

}

const styles = StyleSheet.create({
    container : {
        flex: 1,
        alignItems:'center',
        justifyContent:'center',
        marginTop: 100
    }
})