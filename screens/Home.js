import React from "react";
import { View, Text, Image, StyleSheet, TextInput, TouchableOpacity, ScrollView } from "react-native";
import { useTranslation } from 'react-i18next';
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Platform } from "react-native";
import Explore from "./Explore";
import Profile from "./Profile";
import holdingWorld from "../assets/holdingWorld.png";
import text_box from "../assets/text_box.png";
import magnifying_glass from "../assets/magnifying_glass.png";
import line_2 from "../assets/line_2.png";
import churches from "../assets/churches.png";
import food_banks from "../assets/food_banks.png";
import job_centers from "../assets/job_centers.png";
import others from "../assets/others.png";
import background_rectangle_8 from "../assets/background_rectangle_8.png";
import food_bank_1 from "../assets/food_bank_1.png";
import food_bank_2 from "../assets/food_bank_2.png";
import food_bank_3 from "../assets/food_bank_3.png";
import church from "../assets/church_1_2.png";

const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

function HomeScreen() {
    const { t } = useTranslation();
    return (
        <View style={styles.container}>
            <Image source={holdingWorld} style={styles.holdingWorld}/>
            <View style={styles.textBoxContainer}>
                <TextInput style={styles.textInput} placeholder="Search..." placeholderTextColor="#555" />
                <Image source={magnifying_glass} style={styles.magnifyingGlass} />
                <Image source={text_box} style={styles.textBoxImage} />
            </View>
            <Image source={line_2} style={styles.line}/>
            <Text style={styles.text}>Categories</Text>
            <View style={styles.categoryContainer}>
                <TouchableOpacity style={styles.button}>
                    <Image source={churches} style={styles.categoryImage}/>
                    <Text style={styles.categoryLabel}>Churches</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                    <Image source={food_banks} style={styles.categoryImage}/>
                    <Text style={styles.categoryLabel}>Food Banks</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                    <Image source={job_centers} style={styles.categoryImage}/>
                    <Text style={styles.categoryLabel}>Job Centers</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                    <Image source={others} style={styles.categoryImage}/>
                    <Text style={styles.categoryLabel}>Others</Text>
                </TouchableOpacity>
            </View>
            <ScrollView style={[styles.verticleScrollView]}>
                <Text style={[styles.text, {top: '0%'}]}>Recently Viewed</Text>
                <ScrollView 
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={styles.horizontalScrollView}
                >
                    <TouchableOpacity style={styles.resourceContainer}>
                        <Image source={background_rectangle_8} style={styles.resourceBox}/>
                        <Image source={food_bank_1} style={styles.resourceImage}/>
                        <Text style={styles.resourceLabel}>Greater Boston Food Bank</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.resourceContainer}>
                        <Image source={background_rectangle_8} style={styles.resourceBox}/>
                        <Image source={food_bank_2} style={styles.resourceImage}/>
                        <Text style={styles.resourceLabel}>Arlington Street Food Bank</Text>
                    </TouchableOpacity>
                </ScrollView>
                <Text style={[styles.text, {top: '0%'}]}>Food Banks</Text>
                <ScrollView 
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={styles.horizontalScrollView}
                >
                    <TouchableOpacity style={styles.resourceContainer}>
                        <Image source={background_rectangle_8} style={styles.resourceBox}/>
                        <Image source={church} style={styles.resourceImage}/>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.resourceContainer}>
                        <Image source={background_rectangle_8} style={styles.resourceBox}/>
                        <Image source={food_bank_3} style={styles.resourceImage}/>
                    </TouchableOpacity>
                </ScrollView>
            </ScrollView>
        </View>
    );
  }

export default function Home() {
    return Platform.OS === "ios" ? (
      <Tab.Navigator>
        <Tab.Screen name="HomeScreen" component={HomeScreen} />
        <Tab.Screen name="Explore" component={Explore} />
        <Tab.Screen name="Profile" component={Profile} />
      </Tab.Navigator>
    ) : (
      <Drawer.Navigator>
        <Drawer.Screen name="HomeScreen" component={HomeScreen} />
        <Drawer.Screen name="Explore" component={Explore} />
        <Drawer.Screen name="Profile" component={Profile} />
      </Drawer.Navigator>
    );
  }

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
    },
    textBoxContainer: {
        alignSelf: 'center',
        width: '80%',
        height: 60,
        top: '5%',
    },
    textInput: {
        top: '7%',
        left: '18%',
        fontSize: 16,
        zIndex: 1,
    },
    textBoxImage: {
        position: 'absolute',
        resizeMode: 'stretch',
    },
    magnifyingGlass: {
        position: 'absolute',
        top : '15%',
        left: '5%',
    },
    line: {
        top: '5%',
    },
    categoryContainer: {
        top: '20%',
        flexDirection: 'row',
    },
    categoryImage: {
        alignSelf: 'center',
        marginHorizontal: '3%',
    },
    categoryLabel: {
        fontSize: 13,
        alignSelf: 'center',
    },
    text: {
        top: '8%',
        fontSize: 20,
        alignSelf: 'flex-start',
        left: '7%',
    },
    verticleScrollView: {
        flex: 1,
        width: '100%',
    },
    horizontalScrollView: {
        flexDirection: 'row',
    },
    horizontalImage: {
        width: 100,
        height: 100,
        marginRight: 10,
    },
    horizontalLabel: {
        fontSize: 14,
        textAlign: 'center',
        marginTop: 5,
    },
    button: {
        marginBottom: '22%',
    },
    resourceContainer: {
        marginBottom: '-28%',
    },
    resourceImage: {
        left: '4%',
        top: '-55%',
    },
    resourceLabel: {
        fontSize: 14,
        left: '4%',
        top: '-55%',
    },
});