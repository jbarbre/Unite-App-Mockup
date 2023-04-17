import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet, TextInput, ScrollView } from "react-native";
import { useTranslation } from 'react-i18next';
import line_2 from "../assets/line_2.png";
import magnifying_glass from "../assets/magnifying_glass.png";
import text_box from "../assets/text_box.png";
import map from "../assets/map.png";
import background_rectangle_9 from "../assets/background_rectangle_9.png";
import explore_1 from "../assets/explore_1.png";
import explore_2 from "../assets/explore_2.png";
import explore_3 from "../assets/explore_3.png";
import explore_4 from "../assets/explore_4.png";

export default function Explore( {navigation} ) {
    const { t } = useTranslation();
    return (
        <View style={styles.container}>
            <View style={styles.textBoxContainer}>
                <TextInput style={styles.textInput} placeholder="Search..." placeholderTextColor="#555" />
                <Image source={magnifying_glass} style={styles.magnifyingGlass} />
                <Image source={text_box} style={styles.textBoxImage} />
            </View>
            <Text style={styles.text}>Nearby Resources</Text>
            <Image source={map} style={styles.map}/>
            <Image source={line_2} style={styles.line}/>
            <ScrollView style={styles.verticleScrollView}>
                <View style={styles.rowContainer}>
                    <TouchableOpacity style={styles.resourceContainer}>
                        <Image source={background_rectangle_9} style={styles.backgroundRectangle}/>
                        <Image source={explore_1} style={styles.resourceImage}/>
                        <Text style={styles.resourceLabel}>Greater Boston Food Bank</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.resourceContainer}>
                        <Image source={background_rectangle_9} style={styles.backgroundRectangle}/>
                        <Image source={explore_2} style={styles.resourceImage}/>
                        <Text style={styles.resourceLabel}>Greater Boston Food Bank</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.rowContainer}>
                    <TouchableOpacity style={styles.resourceContainer}>
                        <Image source={background_rectangle_9} style={styles.backgroundRectangle}/>
                        <Image source={explore_3} style={styles.resourceImage}/>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.resourceContainer}>
                        <Image source={background_rectangle_9} style={styles.backgroundRectangle}/>
                        <Image source={explore_4} style={styles.resourceImage}/>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
    },
    textBoxContainer: {
        flexBox: 1,
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
    text: {
        fontSize: 20,
        top: '5%',
        alignSelf: 'flex-start',
        left: '10%',
    },
    map: {
        alignSelf: 'center',
        top: '7%',
        width: '81.5%',
        resizeMode: 'stretch',
    },
    line: {
        top: '10%',
    },
    rowContainer: {
        flex: 1,
        flexDirection: 'row',
    },
    verticleScrollView: {
        flex: 1,
        width: '100%',
        height: '100%',
        top: '11%',
    },
    resourceContainer: {
        marginBottom: '-45%',
    },
    resourceImage: {
        left: '4%',
        top: '-55%',
        width: '92%',
        borderRadius: 10,
    },
    resourceLabel: {
        fontSize: 14,
        left: '4%',
        top: '-55%',
    },
});