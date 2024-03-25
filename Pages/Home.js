import {
  ImageBackground,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  FlatListComponent,
  FlatList,
  Modal,
} from "react-native";
import { Entypo } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import Button from "../Components/Button";
import { AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from '@expo/vector-icons';
import { useEffect, useState } from "react";
import SidePanel from "./SidePanel";
import NavigationComponent from "../Components/NavigationComponent";
const src = {
  uri: "https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?auto=compress&cs=tinysrgb&w=600",
};

const ShoeData = [
  {
    ProductName: "Black-and-white Adidas Gazelle",
    url: {
      uri: "https://images.pexels.com/photos/1031955/pexels-photo-1031955.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    ProductPrize: "200$",
  },
  {
    ProductName: "Adidas Men's footwear",
    url: {
      uri: "https://images.pexels.com/photos/812875/pexels-photo-812875.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    ProductPrize: "200$",
  },
  {
    ProductName: "Black-and-white Adidas Sneakers",
    url: {
      uri: "https://images.pexels.com/photos/13058810/pexels-photo-13058810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    ProductPrize: "200$",
  },
  {
    ProductName: "White Adidas Low Top Shoe",
    url: {
      uri: "https://images.pexels.com/photos/1599005/pexels-photo-1599005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    ProductPrize: "200$",
  },
  {
    ProductName: "White Adidas Stan Smith Sneaker",
    url: {
      uri: "https://images.pexels.com/photos/3281608/pexels-photo-3281608.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    ProductPrize: "200$",
  },
];

export default function Home() {
  const Categories = ["All", "Men's", "Woman's", "Children's"];
  const SidePanelData = ["Home ", "Profile", "Favorites", "Help&Support","Settings"];

  

  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.container}>
      
      <View style={styles.header}>
        <Pressable onPress={()=> {setModalVisible(!modalVisible)}}  style={styles.icon}>
          <Entypo name="menu" size={24} color="black" />
        </Pressable>
        <Pressable style={styles.icon}>
          <FontAwesome name="search" size={24} color="black" />
        </Pressable>
      </View>
      <Modal
       animationType= 'fade'
       transparent={true}
       visible={modalVisible}
       onRequestClose={() => {
         setModalVisible(!modalVisible);
       }}
      >
        <View style={styles.modalView}>
          <View style={{flexDirection:'row',alignItems:'center',justifyContent:'center', gap: 3}}>
          <MaterialIcons name="account-circle" size={40} color="white" />
          <Text style={{color:'white'}}>RAGHUL S</Text>
          </View>
          
        {SidePanelData.map((item, index) => (
              <View
                style={{
                  height: 30,
                  width: "auto",
                  paddingVertical: 5,
                  paddingHorizontal: 10,
                  backgroundColor: "#aaaa",
                  borderRadius: 10,
                  alignItems: 'flex-start',
                  justifyContent: 'flex-start',
                  marginRight: 10,
                }}
                key={index}
              >
                <Text style={{ fontSize: 15, color: "black" }}>{item}</Text>
              </View>
            ))}
          
        </View>

      </Modal>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          marginTop: 30,
          backgroundColor: "#f1f1f1",
          alignItems: "center",
          justifyContent: "center",
          zIndex: -1,
        }}
      >
        <View style={styles.banner}>
          <ImageBackground
            source={src}
            resizeMode="cover"
            style={styles.image}
            borderRadius={30}
          >
            <Text style={styles.bannerText}>
              50% on the Entire Summer Collection
            </Text>
            <Text style={styles.bannerText}>Summer Sale</Text>
            <View style={styles.bannerText}>
              <Button height={20} width={100} title="Show More" />
            </View>
          </ImageBackground>
        </View>
        <View style={styles.categoriesContainer}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Text style={{ fontSize: 20 }}>Top Categories</Text>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Text style={{ textDecorationLine: "underline" }}>View All</Text>
              <AntDesign name="right" size={24} color="black" />
            </View>
          </View>
          <ScrollView horizontal={true}>
            {Categories.map((item, index) => (
              <View
                style={{
                  height: 30,
                  width: "auto",
                  paddingVertical: 5,
                  paddingHorizontal: 10,
                  backgroundColor: "#aaaa",
                  borderRadius: 10,
                  alignItems: "center",
                  justifyContent: "center",
                  marginRight: 10,
                }}
                key={index}
              >
                <Text style={{ fontSize: 15, color: "black" }}>{item}</Text>
              </View>
            ))}
          </ScrollView>
        </View>
        <View style={styles.latestContainer}>
          <Text style={{ textAlign: "left", fontSize: 20 }}>
            The Latest and Greatest
          </Text>
          <ScrollView horizontal={true}>
            {ShoeData.map((item, index) => (
              <View
                style={{
                  height: 200,
                  width: 150,
                  paddingVertical: 3,
                  paddingHorizontal: 10,
                  backgroundColor: "#aaaa",
                  borderRadius: 10,
                  alignItems: "flex-start",
                  justifyContent: "center",
                  marginRight: 5,
                  flexDirection: "column",
                  gap: 10,
                }}
                key={index}
              >
                <Image
                  source={item.url}
                  style={{ height: 100, width: "100%", margin: 0 }}
                />
                <Text style={{ fontSize: 15, color: "black" }}>
                  {item.ProductName}
                </Text>
                <View style={{flexDirection:'row',justifyContent:'space-between', alignItems:'center', gap: 20}}>
                <Text style={{ color: "green" }}>{item.ProductPrize}</Text>
                <Pressable>
                <Button height={20} width={70} title="Buy Now"/>
                </Pressable>
                </View>
              </View>
            ))}
          </ScrollView>
        </View>
        <View style={styles.trendingContainer}>
          <Text style={{ textAlign: "left", fontSize: 20 }}>
            Trending this week
          </Text>
          <View style={{flex: 4, flexDirection:'row', marginBottom: 50,  flexWrap:'wrap', gap: 10}}>
          {ShoeData.map((item, index) => (
              <View
                style={{
                  height: 200,
                  width: 140,
                  paddingVertical: 3,
                  paddingHorizontal: 10,
                  backgroundColor: "#aaaa",
                  borderRadius: 10,
                  alignItems: "flex-start",
                  justifyContent: "center",
                  marginRight: 5,
                  flexDirection: "column",
                  gap: 10,
                }}
                key={index}
              >
                <Image
                  source={item.url}
                  style={{ height: 100, width: "100%", margin: 0 }}
                />
                <Text style={{ fontSize: 15, color: "black" }}>
                  {item.ProductName}
                </Text>
                <View style={{flexDirection:'row',justifyContent:'space-between', alignItems:'center', gap: 20}}>
                <Text style={{ color: "green" }}>{item.ProductPrize}</Text>
                <Pressable>
                <Button height={20} width={70} title="Buy Now"/>
                </Pressable>
                </View>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
      <View style={{ marginBottom:100}}>
      <NavigationComponent/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    backgroundColor: "#f1f1f1",
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    flex: 1,
    height: 100,
    width: "100%",
    padding: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    zIndex: 9999,
  },
  icon: {
    height: 40,
    width: 40,
    borderRadius: 100,
    backgroundColor: "#aaaa",
    alignItems: "center",
    justifyContent: "center",
  },
  banner: {
    width: 300,
    height: 200,
  },
  image: {
    flex: 1,
    justifyContent: "center",
    gap: 20,
  },
  bannerText: {
    color: "white",
    textAlign: "left",
    marginLeft: 20,
    width: 150,
  },
  categoriesContainer: {
    height: 100,
    width: 300,
    marginTop: 20,
    flexDirection: "column",
    gap: 10,
  },
  latestContainer: {
    height: "auto",
    width: 300,
    flexDirection: "column",
    gap: 10,
  },
  trendingContainer: {
    width: 300,
    height: "auto",
    marginVertical: 20,
  },
  modalView : {
    height: '100%',
    width: 200,
    marginTop: 35,
    backgroundColor: "#31363F",
    borderTopRightRadius: 30,
    borderBottomRightRadius: 30,
    padding: 15,
    alignItems: 'flex-start',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    gap: 40,
  }
});
