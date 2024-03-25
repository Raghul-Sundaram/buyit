import { View, Text, StyleSheet } from "react-native"



const Button = ({height,width,title}) => {
  return (
    <View style={{height: height,width: width, backgroundColor:'white', borderRadius: 40, alignItems:'center', justifyContent:'center'}}>
        <Text style={{color:'black',fontSize: 10}}>{title}</Text>
    </View>
  )
}

export default Button


