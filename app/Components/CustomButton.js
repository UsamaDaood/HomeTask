import React, { useRef, useState, useEffect } from 'react';
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    FlatList,
    TouchableOpacity,
    Image,
    TextInput
} from 'react-native';


export default function CustomButton({
    title, titleStyle,
    callBackButtonClick, buttonBackground

}) {


    return (
        <View style={{}}>
            <TouchableOpacity
                style={{ backgroundColor: buttonBackground, borderRadius: 20, }}
                onPress={() => callBackButtonClick()}
            >
                <Text style={[styles.buttonTitleStyle, { titleStyle }]}>{title}</Text>
            </TouchableOpacity>

        </View>




    )

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    buttonTitleStyle: {
        textAlign: 'center',
        paddingVertical: 13,
        fontWeight: 'bold',
        color: '#fff'
    }

})
