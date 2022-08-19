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
    ToastAndroid,
    AsyncStorage
} from 'react-native';
import CustomInputTexts from '../Components/CustomInputTexts'
import CustomButton from '../Components/CustomButton';

export default function SignUpScreen({ navigation }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');

    const callBackButtonClick = () => {
        //console.log("LOG:: OAAY " + email + " " + password);
        navigation.navigate("HomeTabScreen");
        //createAccount();
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
                <Text style={styles.titleStyle}>Register Yourself</Text>
                {/*form to get Input like email and Password*/}
                <CustomInputTexts
                    title={'Name'}
                    customStyle={styles.emailView}
                    placeholder={'e.g David'}
                    value={name}
                    setInputValue={text => setName(text)}
                    keyboardType={'email-address'}
                    IconStyle={styles.IconStyle}
                    rightViewStyle={styles.rightViewStyle}
                />
                <CustomInputTexts
                    title={'Email'}
                    customStyle={styles.emailView}
                    placeholder={'e.g email@gmail.com'}
                    value={email}
                    setInputValue={text => setEmail(text)}
                    keyboardType={'email-address'}
                    //rightIcon={require('../../resources/png/ic_email.png')}
                    IconStyle={styles.IconStyle}
                    rightViewStyle={styles.rightViewStyle}
                />
                {/*password Fields*/}
                <CustomInputTexts
                    title={'Password'}
                    customStyle={styles.emailView}
                    placeholder={'Your password'}
                    value={password}
                    setInputValue={text => setPassword(text)}
                    //rightIcon={require('../../resources/png/ic_open_eye.png')}
                    IconStyle={styles.IconStyle}
                    rightViewStyle={styles.rightViewStyle}
                    isPassword={true}
                />
                <View style={{ flexDirection: 'column', marginHorizontal: 26 }}>

                    <View style={{ width: '100%', flexDirection: 'column', marginVertical: 30 }}>

                        <CustomButton
                            title={'Create Now'}
                            buttonStyle={{ backgroundColor: '#4A67AB', borderRadius: 20, }}
                            buttonBackground={'#4A67AB'}
                            callBackButtonClick={callBackButtonClick}
                        />

                        <TouchableOpacity
                            style={{ marginVertical: 10, alignSelf: 'center' }}
                            onPress={() => navigation.goBack()}
                        >
                            <View style={{ flexDirection: 'row' }}>
                                <Text>Already have an account? Log in </Text>
                            </View>
                        </TouchableOpacity>

                        <CustomButton
                            title={'Login'}
                            buttonStyle={{ backgroundColor: '#3998DB', borderRadius: 20, }}
                            buttonBackground={'#3998DB'}
                            callBackButtonClick={() => navigation.goBack()}
                        />

                    </View>
                </View>

                {/*end Input form to get Email and Password*/}

            </View>
        );
    }

    return (
        <ScrollView>


            <View style={{ flex: 1, flexDirection: 'column', marginHorizontal: 20 }}>
                {/*<Text>LoginScreen Screen</Text>*/}
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