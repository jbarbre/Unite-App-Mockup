import React, { useEffect } from "react";
import { View, StyleSheet } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import DropDownPicker from 'react-native-dropdown-picker';
import { useTranslation } from 'react-i18next';

export default function Settings({ first, second, onUpdateFirst, onUpdateSecond }) {
    const { t, i18n } = useTranslation();

    const changeLanguage = (language) => {
        i18n.changeLanguage(language);
    }

    useEffect(() => {
        async function saveSettings() {
            try {
                const settingsObj = { firstSwitchValue: first, secondSwitchValue: second, language: i18n.language };
                const settingsJSON = JSON.stringify(settingsObj);
                await AsyncStorage.setItem("settings", settingsJSON);
            } catch (error) {
                console.error("Error saving settings:", error);
            }
        }
        saveSettings();
    }, [first, second, i18n.language]);

    return (
        <View style={styles.container}>
            <DropDownPicker
                items={[
                    { label: 'English', value: 'en' },
                    { label: 'العربية', value: 'ar' },
                    { label: '中文', value: 'zh' },
                    { label: 'Français', value: 'fr' },
                    { label: 'русский', value: 'ru' },
                    { label: 'Español', value: 'es' }
                ]}
                defaultValue={i18n.language}
                containerStyle={styles.pickerContainer}
                style={styles.picker}
                itemStyle={styles.pickerItem}
                dropDownStyle={styles.dropDown}
                onChangeItem={(item) => changeLanguage(item.value)}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
    },
    pickerContainer: {
        height: 40,
        width: '80%',
    },
    picker: {
        backgroundColor: '#fafafa',
    },
    pickerItem: {
        justifyContent: 'flex-start',
    },
    dropDown: {
        backgroundColor: '#fafafa',
    },
});
