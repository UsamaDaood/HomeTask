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


export default function CustomHeader({
    title, titleStyle,
    callBackLeftImage, callBackRightImage,
    leftImage, rightImage

}) {


    return (
        <View style={styles.headerStyle}>
            <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                {leftImage &&
                    <TouchableOpacity
                        onPress={callBackLeftImage}
                    >
                        <Image
                            source={leftImage ? leftImage : require('../../resources/png/ic_back.png')}
                            style={{ width: 30, height: 20, marginLeft: 10, }}
                            resizeMode={'contain'}
                        />
                    </TouchableOpacity>}
                <Text style={[styles.titleStyle, titleStyle]}> {title} </Text>
            </View>

            {rightImage &&
                <TouchableOpacity
                    onPress={callBackRightImage}
                    style={{ paddingHorizontal: 10 }}
                >
                    <Image
                        source={rightImage ? rightImage : require('../../resources/png/ic_back.png')}
                        style={{ width: 30, height: 20, marginLeft: 10, }}
                        resizeMode={'contain'}
                    />
                </TouchableOpacity>


            }


        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    headerStyle: {
        alignItems: 'center',
        flexDirection: 'row',
        height: 50,
        backgroundColor: '#3998DB',
        justifyContent: 'space-between'

    },
    titleStyle: {
        marginHorizontal: 10,
        color: 'white',
        fontSize: 21
    }

})
