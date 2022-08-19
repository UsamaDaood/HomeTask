import React, { useRef, useState, useEffect } from 'react';

import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    FlatList,
    TouchableOpacity,
    Image,
    TextInput,
    ScrollView,
    Alert,
    AsyncStorage,
    ToastAndroid,
    PermissionsAndroid
} from 'react-native';
import CustomInputTexts from '../Components/CustomInputTexts'
import CustomButton from '../Components/CustomButton';


export default function LoginScreen({ navigation }) {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    useEffect(async () => {


    }, []);

    const callBackButtonClick = () => {
        navigation.navigate("HomeScreen");
    }

    // Render Signin Form.
    const renderSigninForm = () => {
        return (
            <View style={{ flexDirection: 'column', marginVertical: 10, flex: 1 }}>
                <Image
                    source={{ uri: 'https://hermingevorgyan.files.wordpress.com/2019/09/task.png' }}
                    style={{ width: 150, height: 150, alignSelf: 'center' }}
                    resizeMode={'contain'}
                />
                <Text style={styles.titleStyle}>Welcome to Kitchen</Text>
                <Text style={styles.smallTextStyle}>Find Nearby Home cooked Lunch.</Text>

                <CustomInputTexts
                    title={'Email'}
                    customStyle={styles.emailView}
                    placeholder={'e.g email@gmail.com'}
                    value={email}
                    setInputValue={text => setEmail(text)}
                    keyboardType={'email-address'}
                    IconStyle={styles.IconStyle}
                    rightViewStyle={styles.rightViewStyle}
                />
                {/*password Fields*/}
                <CustomInputTexts
                    title={'Password'}
                    customStyle={styles.emailView}
                    placeholder={'********'}
                    value={password}
                    setInputValue={text => setPassword(text)}
                    IconStyle={styles.IconStyle}
                    rightViewStyle={styles.rightViewStyle}
                    isPassword={true}
                />
                <View style={{ flexDirection: 'column', marginHorizontal: 26 }}>

                    <View style={{ width: '100%', flexDirection: 'column', marginVertical: 120 }}>

                        <CustomButton
                            title={'Sign in'}
                            buttonStyle={{ backgroundColor: '#00BCD4', borderRadius: 20, }}
                            buttonBackground={'#3998DB'}
                            callBackButtonClick={callBackButtonClick}
                            testId={"loginButton"}
                        />

                        <TouchableOpacity
                            style={{ marginVertical: 10, alignSelf: 'center' }}
                            onPress={() => navigation.navigate("SignUpScreen")}
                        >
                            <View style={{ flexDirection: 'row' }}>
                                <Text>Don't have account? Signup Now </Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>

                {/*end Input form to get Email and Password*/}
            </View>
        );
    }

    return (
        <ScrollView>
            <View style={{ flex: 1, flexDirection: 'column', marginHorizontal: 20 }}>
                {renderSigninForm()}
            </View>
        </ScrollView>
    )
}




const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    emailView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#EAECF5',
        borderRadius: 10,
        justifyContent: 'center'
    },
    titleStyle: {
        fontSize: 27,
        fontWeight: 'bold',
        alignSelf: 'center'
    },
    smallTextStyle: {
        fontSize: 17,
        alignSelf: 'center',
        textAlign: 'center',
        marginTop: 10
    },
    IconStyle: {
        width: 30, height: 30, alignSelf: 'center', marginHorizontal: 10,
    },
    rightViewStyle: {
        alignSelf: 'center',
    }
})


