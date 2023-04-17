import React from "react";
import { View, Text, TextInput, Image, ImageBackground, TouchableOpacity, StyleSheet } from "react-native";
import { useTranslation } from 'react-i18next';
import imageRectangle1 from "../assets/background_rectangle_1.png";
import imageRectangle2 from "../assets/background_rectangle_2.png";
import imageRectangle3 from "../assets/background_rectangle_3.png";
import imageRectangle4 from "../assets/background_rectangle_4.png";
import circle from "../assets/circle.png";
import google from "../assets/google.png";
import facebook from "../assets/facebook.png";
import twitter from "../assets/twitter.png";
import line from "../assets/line_3.png";

export default function Login( { navigation } ) {
    const { t } = useTranslation();
    return (
        <ImageBackground source={require("../assets/background_hands.png")} style={styles.imageHands}>
            <View style={styles.overlayContainer}>
                <Image source={imageRectangle1} style={styles.imageRectangle1} />
                <Image source={imageRectangle2} style={styles.imageRectangle2} />
                <View style={styles.imageRectangle3}>
                    <Text style={[styles.imageText, {left: '15%'}, {top: '37%'}]}>{t('Sign Up')}</Text>
                    <Image source={imageRectangle3}/>
                </View>
                <TouchableOpacity style={[ {left: '-20%'}, {top: '-54%'}]} onPress={() => navigation.navigate("Login")}>
                    <Text style={[styles.text,]}>{t('Log In')}</Text>
                </TouchableOpacity>
                <View style={styles.usernameContainer}>
                    <TextInput style={styles.textInput} placeholder="Enter Email/Phone Number/Username" placeholderTextColor="#F78154" />
                    <Image source={line} style={[styles.line]}/>
                </View>
                <View style={styles.passwordContainer}>
                    <TextInput style={styles.textInput} placeholder="Password" placeholderTextColor="#F78154" />
                    <Image source={line} style={[styles.line]}/>
                </View>
                <View style={styles.confirmPasswordContainer}>
                    <TextInput style={styles.textInput} placeholder="Confirm Password" placeholderTextColor="#F78154" />
                    <Image source={line} style={[styles.line]}/>
                </View>
                <TouchableOpacity style={[styles.imageRectangle4, {top: '-25%'}]}>
                    <Text style={[styles.imageText, {left: '34%'}, {top: '45%'}]}>{t('Sign Up')}</Text>
                    <Image source={imageRectangle4}/> 
                </TouchableOpacity>
                <Text style={[styles.text, {top: '-25.25%'}]}>or</Text>
                <View style={[styles.overlayContainer, {top: '-55%'}, { flexDirection: 'row' }]}>
                    <Image source={circle}/>
                    <Image source={circle}/>
                    <Image source={circle}/>
                </View>
                <View style={[styles.overlayContainer, {top: '-65%'}, { flexDirection: 'row' }]}>
                    <TouchableOpacity style={{ left: '-80%' }}>
                        <Image source={google} style={{ zIndex: 2 }} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image source={facebook} style={{ zIndex: 2 }} />
                    </TouchableOpacity>
                    <TouchableOpacity style={{ right: '-80%' }}>
                        <Image source={twitter} style={{ zIndex: 2 }} />
                    </TouchableOpacity>
                </View>
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    imageHands: {
        width: '100%',
        height: '60%',
    },
    overlayContainer: {
        position: 'relative',
        alignItems: 'center',
    },
    imageRectangle1: {
        position: 'relative',
        top: '15%', 
    },
    imageRectangle2: {
        position: 'relative',
        top: '-40%',
    },
    imageRectangle3: {
        position: 'relative',
        top: '-49%',
        left: '20%',
    },
    imageRectangle4: {
        position: 'relative',
        top: '60%',
    },
    imageText: {
        position: 'relative',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 2,
        color: '#FFF',
    },
    text: {
        position: 'relative',
        zIndex: 1,
        color: '#F78154'
    },
    usernameContainer: {
        flex: 1,
        position: 'absolute',
        top: '30%',
        alignSelf: 'center',
    },
    passwordContainer: {
        flex: 1,
        position: 'absolute',
        top: '36%',
        alignSelf: 'center',
    },
    confirmPasswordContainer: {
        flex: 1,
        position: 'absolute',
        top: '42%',
        alignSelf: 'center',
    },
    line: { 
        zIndex: 1,
        alignSelf: 'center',
    },
    textInput: {
        zIndex: 2,
        alignSelf: 'center',
        top: '5%',
    },
});