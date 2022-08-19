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


export default function CustomInputTexts({
    title,
    rightIcon, callBackRightIcon,
    customStyle, titleStyle, multiLine,
    placeholder, getInputValue, setInputValue, keyboardType,
    IconStyle, InputValue, rightViewStyle, isPassword }) {


    return (
        <View style={{ flexDirection: 'column', marginVertical: 10, marginHorizontal: 26 }}>

            <Text style={titleStyle}>{title}</Text>
            <View style={customStyle}>
                <TextInput
                    style={{ flex: 0.95 }}
                    onChangeText={text => setInputValue(text)}
                    value={getInputValue}
                    placeholder={placeholder}
                    keyboardType={keyboardType}
                    secureTextEntry={isPassword}
                    multiline={multiLine}
                />
                <TouchableOpacity
                    onPress={() => callBackRightIcon}
                    style={rightViewStyle}
                >
                    <Image
                        source={rightIcon}
                        style={IconStyle}
                        resizeMode={'contain'}
                    />
                </TouchableOpacity>

            </View>

        </View>




    )

}
