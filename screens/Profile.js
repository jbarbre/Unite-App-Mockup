import React from "react";
import { View, Text, Image, ImageBackground, TouchableOpacity, StyleSheet } from "react-native";
import { useTranslation } from 'react-i18next';
import profile_photo from "../assets/profile_photo.png";
import background_rectangle_6 from "../assets/background_rectangle_6.png";
import line_1 from "../assets/line_1.png";
import arrow from "../assets/arrow.png";

export default function Profile( {navigation} ) {
    const { t } = useTranslation();
    return (
        <View>
            <ImageBackground source={require("../assets/background_rectangle_5.png")} style={styles.imageBackground}>
                <Text style={[styles.text, {top: '5%'}, {color: '#FFF'}]}>User</Text>
                <Image source={profile_photo} style={styles.profilePhoto}/>
                <TouchableOpacity style={[styles.profileBtn, {top: '8%'}]} onPress={() => navigation.navigate('EditProfile')}>
                    <Text style={[styles.text, {top: '50%'}, {color: '#FFF'}]}>{t('Edit Profile')}</Text>
                    <Image source={background_rectangle_6}/>
                </TouchableOpacity>
            </ImageBackground>
            <TouchableOpacity style={[styles.optionContainer]} onPress={() => navigation.navigate('Home')}>
                <Text style={[styles.textOptions,  {color: '#000'}]}>{t('Favorites')}</Text>
                <Image style={styles.arrow} source={arrow}/>
                <Image style={styles.line} source={line_1}/>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.optionContainer]} onPress={() => navigation.navigate('Home')}>
                <Text style={[styles.textOptions,  {color: '#000'}]}>{t('History')}</Text>
                <Image style={styles.arrow} source={arrow}/>
                <Image style={styles.line} source={line_1}/>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.optionContainer]} onPress={() => navigation.navigate('Home')}>
                <Text style={[styles.textOptions,  {color: '#000'}]}>{t('Language')}</Text>
                <Image style={styles.arrow} source={arrow}/>
                <Image style={styles.line} source={line_1}/>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.optionContainer]} onPress={() => navigation.navigate('Home')}>
                <Text style={[styles.textOptions,  {color: '#000'}]}>{t('About')}</Text>
                <Image style={styles.arrow} source={arrow}/>
                <Image style={styles.line} source={line_1}/>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.optionContainer]} onPress={() => navigation.navigate('Settings')}>
                <Text style={[styles.textOptions,  {color: '#000'}]}>{t('Settings')}</Text>
                <Image style={styles.arrow} source={arrow}/>
                <Image style={styles.line} source={line_1}/>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.optionContainer]} onPress={() => navigation.navigate('Home')}>
                <Text style={[styles.textOptions,  {color: '#000'}]}>{t('Location')}</Text>
                <Image style={styles.arrow} source={arrow}/>
                <Image style={styles.line} source={line_1}/>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    imageBackground: {
        width: '100%',
        height: 240,
        resizeMode: "cover",
    },
    profilePhoto: {
        alignSelf: 'center',
        justifyContent: 'center',
        top: '10%',
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
    optionContainer: {
        flexbox: 1,
        alignSelf: 'center',
        top: '0%',
        paddingTop: 10,

    },
    line: {
        alignSelf: 'center',
    },
    arrow: {
        alignSelf: 'center',
        left: '40%',
        top: '-30%',
    },
    textOptions: {
        left: '10%',
        fontSize: 20,
        zIndex: 1,
    }
});