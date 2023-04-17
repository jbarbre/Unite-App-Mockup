import React from "react";
import { View, Text, Image, ImageBackground, TouchableOpacity, StyleSheet, TextInput } from "react-native";
import { useTranslation } from 'react-i18next';
import profile_photo from "../assets/profile_photo.png";
import text_box from "../assets/text_box.png";
import background_rectangle_7 from "../assets/background_rectangle_7.png";

export default function EditProfile( {navigation} ) {
    const { t } = useTranslation();
    return (
        <View style={styles.container}>
            <ImageBackground
                source={require("../assets/background_rectangle_5.png")}
                style={styles.imageBackground}
                resizeMode="cover"
            >
                <Text style={[styles.text, {top: '15%'}, {color: '#FFF'}]}>User Profile</Text>
                <Image source={profile_photo} style={styles.profilePhoto}/>
            </ImageBackground>
            <TouchableOpacity style={{top: '14%'}}>
                <Text style={[styles.text, {fontSize: 15}]}>Change Picture</Text>
            </TouchableOpacity>
            <Text style={styles.textBoxLabel}>User Name</Text>
            <View style={styles.textBoxContainer}>
                <TextInput style={styles.textInput} placeholder="Enter your text" placeholderTextColor="#555" />
                <Image source={text_box} style={styles.textBoxImage} />
            </View>
            <Text style={styles.textBoxLabel}>Email</Text>
            <View style={styles.textBoxContainer}>
                <TextInput style={styles.textInput} placeholder="Enter your text" placeholderTextColor="#555" />
                <Image source={text_box} style={styles.textBoxImage} />
            </View>
            <Text style={styles.textBoxLabel}>Phone Number</Text>
            <View style={styles.textBoxContainer}>
                <TextInput style={styles.textInput} placeholder="Enter your text" placeholderTextColor="#555" />
                <Image source={text_box} style={styles.textBoxImage} />
            </View>
            <Text style={styles.textBoxLabel}>Password</Text>
            <View style={styles.textBoxContainer}>
                <TextInput style={styles.textInput} placeholder="Enter your text" placeholderTextColor="#555" />
                <Image source={text_box} style={styles.textBoxImage} />
            </View>
            <TouchableOpacity style={[styles.profileBtn, {top: '12%'}]} onPress={() => navigation.navigate('Profile')}>
                <Text style={[styles.text, {top: '50%'}, {color: '#FFF'}]}>{t('Update')}</Text>
                <Image source={background_rectangle_7}/>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.profileBtn, {top: '12%'}]} onPress={() => navigation.navigate('Profile')}>
                <Text style={[styles.text, {top: '50%'}, {color: '#FFF'}]}>{t('Exit')}</Text>
                <Image source={background_rectangle_7}/>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    imageBackground: {
        width: '100%',
        height: 200,
        resizeMode: "cover",
    },
    profilePhoto: {
        width: '60%',
        height: 230,
        alignSelf: 'center',
        justifyContent: 'center',
        top: '25%',
        
    },
    profileBtn: {
        alignSelf: 'center',
        justifyContent: 'center',
    },
    text: {
        alignSelf: 'center',
        justifyContent: 'center',
        fontSize: 20,
        zIndex: 1,
    },
    textBoxContainer: {
        flexBox: 1,
        alignSelf: 'center',
        width: '80%',
        height: 60,
        top: '15%',
    },
    textInput: {
        top: '7%',
        alignSelf: 'center',
        justifyContent: 'center',
        fontSize: 16,
        zIndex: 1,
    },
    textBoxImage: {
        position: 'absolute',
        resizeMode: 'stretch',
    },
    textBoxLabel: {
        top: '15%',
        left: '10%',
        fontSize: 16,
    },
    profileBtn: {
        alignSelf: 'center',
        justifyContent: 'center',
    },
});