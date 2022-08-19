import React, { useRef, useState, useEffect } from 'react';

import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    FlatList,
    Image,
    TouchableOpacity,
    AsyncStorage
} from 'react-native';

export default function SplashScreen({ navigation }) {

    useEffect(() => {

        setTimeout(function () {
            navigation.reset({
                index: 0,
                routes: [{ name: 'LoginScreen' }]
            })
        }, 3000);

    }, []);

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#00BCD4' }}>
            <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'center' }}>
                <Image
                    source={{ uri: 'https://hermingevorgyan.files.wordpress.com/2019/09/task.png' }}
                    style={{ width: 200, height: 200, alignSelf: 'center' }}
                    resizeMode={'contain'}
                />
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

})