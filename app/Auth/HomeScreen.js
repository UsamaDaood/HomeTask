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
    ImageBackground
} from 'react-native';
import CustomInputTexts from '../Components/CustomInputTexts';


export default function HomeScreen({ navigation }) {
    const [text, setText] = useState('Okay Valis is here');
    const [array, setArray] = useState(['data', 'second Dara', 'third']);

    useEffect(() => {
        // Update the document title using the browser API
        //setTimeout(function () {
        //    navigation.navigate("LoginScreen");

        //}, 3000);

    }, []);

    const handlingTextInput = () => {
        if (text.length != 0) {
            var getTextPrev = [...array];
            getTextPrev.push(text);
            setArray(getTextPrev);
        }

    }

    const renderInput = () => {
        return (
            <SafeAreaView>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', borderWidth: 1 }}>

                    <TextInput
                        style={{ height: 40 }}
                        placeholder="Type Stuff"
                        //onChangeText={newText => setText(newText)}
                        value={text}
                        editable={true}
                    />

                    <TouchableOpacity
                        onPress={() => handlingTextInput()}
                        style={{ alignSelf: 'center' }}
                    >
                        <Image
                            source={{ uri: 'data:image/png;base64,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' }}
                            style={{ width: 20, height: 20, alignSelf: 'center', marginHorizontal: 5 }}
                            resizeMode={'contain'}
                        />
                    </TouchableOpacity>


                </View>
            </SafeAreaView>
        );
    }

    const renderFlatList = () => {
        return (
            <View style={{ margin: 10 }}>
                <FlatList
                    data={array}
                    renderItem={({ item, index }) => renderListItem(item, index)}
                    numColumns={'1'}
                    keyExtractor={item => item.id}
                />
            </View>
        )
    }

    const renderListItem = (item, index) => {
        return (
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 5, paddingVertical: 5, borderWidth: 1, margin: 5 }}>
                <Text>{item}</Text>
                <TouchableOpacity
                    onPress={() => deleteItemFromList(item, index)}
                >
                    <Image
                        source={{ uri: 'https://cdn-icons-png.flaticon.com/512/66/66847.png' }}
                        style={{ width: 20, height: 20, alignSelf: 'center' }}
                        resizeMode={'contain'}
                    />
                </TouchableOpacity>
            </View>
        )
    }

    const deleteItemFromList = (item, index) => {
        var getListItem = [...array];
        getListItem.splice(index, 1);
        setArray(getListItem);
    }


    const renderHeader = () => {
        return (
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 20 }}>
                {/*Left Design*/}
                <TouchableOpacity
                    onPress={() => navigation.goBack()}
                >
                    <View style={{ flexDirection: 'row' }}>
                        <Image
                            source={require('../../resources/png/ic_back1.png')}
                            style={{ width: 25, height: 25, alignSelf: 'center' }}
                            resizeMode={'contain'}
                        />
                        <Text style={{ color: '#687ad3', alignSelf: 'center' }}>Back</Text>
                    </View>
                </TouchableOpacity>

                {/*Right Design*/}

                <View style={{ flexDirection: 'row', borderRadius: 20, backgroundColor: 'gray', padding: 6, }}>
                    <Image
                        source={require('../../resources/png/ic_dots.png')}
                        style={{ width: 15, height: 15, alignSelf: 'center', padding: 4, }}
                        resizeMode={'contain'}
                    />
                </View>
            </View>
        );
    }

    //REMARKS: top Title
    const renderTitle = () => {
        return (
            <View style={{ flexDirection: 'column' }}>

                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginVertical: 10 }}>
                    <Text style={{ fontSize: 30, color: '#000', fontWeight: 'bold', alignSelf: 'center' }}> To buy later  </Text>
                    <Text style={{ color: '#687ad3', fontSize: 20, alignSelf: 'center' }}>Add product </Text>
                </View>

                {/*Share With View*/}
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', borderBottomWidth: 0.5, paddingBottom: 8 }}>
                    <Text style={{ color: 'gray', fontSize: 17 }}>Shared with </Text>

                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Image
                            source={require('../../resources/png/ic_add_1.png')}
                            style={styles.circleImage}
                            resizeMode={'contain'}
                        />
                        <Image
                            source={{ uri: 'https://images.pexels.com/photos/1704488/pexels-photo-1704488.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' }}
                            style={styles.circleImage}
                            resizeMode={"cover"}
                        />
                        <Image
                            source={{ uri: 'https://www.whatsappprofiledpimages.com/wp-content/uploads/2021/11/alone-Best-Dp-Profile-Images-For-Instagram-photo.gif' }}
                            style={styles.circleImage}
                            resizeMode={"cover"}
                        />
                    </View>
                </View>

                {/*Render Cofee etc.*/}

                <View style={{ flexDirection: 'column', marginVertical: 10, borderBottomWidth: 2, borderBottomColor: '#ebebeb' }}>
                    <Text style={{ color: '#c978b0', fontSize: 18, fontWeight: 'bold' }}>Coffee, Tea & Cocoa</Text>
                    <Text style={{ color: '#242424', fontSize: 18, fontWeight: 'bold', marginVertical: 10 }}>Matcha tea</Text>
                </View>

                {/*Grocery*/}
                <View style={{ flexDirection: 'column', marginVertical: 10, borderBottomWidth: 2, borderBottomColor: '#ebebeb' }}>
                    <Text style={[styles.commonTextStyle, { color: '#ecb467' },]}>Diary</Text>
                    <Text style={{ color: '#242424', fontSize: 18, fontWeight: 'bold', marginTop: 10 }}>Yogurt</Text>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={{ color: '#999999', fontSize: 13, fontWeight: 'bold', }}>Activia</Text>
                        <Text style={{ color: '#999999', fontSize: 13, fontWeight: 'bold', }}>2</Text>
                    </View>
                </View>

                {/*Fruit*/}

                {/*Grocery*/}
                <View style={{ flexDirection: 'column', marginVertical: 10, borderBottomWidth: 2, borderBottomColor: '#ebebeb' }}>
                    <Text style={{ color: '#94e0a3', fontSize: 18, fontWeight: 'bold' }}>Fruits</Text>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', borderBottomWidth: 0.5, paddingBottom: 15, borderBottomColor: 'gray' }}>
                        <Text style={styles.commonTextStyle}>Apples</Text>
                        <Text style={styles.commonTextStyle}>5</Text>
                    </View>

                    {/*Avocado*/}
                    <View style={styles.fruitContainerStyle}>

                        <View style={{ flexDirection: 'column' }}>
                            <Text style={styles.commonTextStyle}>Avocado</Text>
                            <Text style={{ color: '#242424', fontSize: 12, }}>Hass</Text>
                        </View>

                        <View style={{ flexDirection: 'row' }}>

                            <Text style={{ color: 'gray', fontSize: 18, marginTop: 10, marginRight: 30, }}>$4.20</Text>
                            <Text style={{ color: '#242424', fontSize: 18, fontWeight: 'bold', marginTop: 10 }}>2</Text>
                        </View>
                    </View>

                    {/*Personal Care Beauty Section*/}

                    <View style={{ flexDirection: 'column', marginVertical: 10 }}>
                        <Text style={{ color: '#914c75', fontSize: 18, fontWeight: 'bold' }}>Personal Care Beauty Section</Text>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', borderBottomWidth: 0.5, paddingBottom: 15, borderBottomColor: 'gray' }}>
                            <Text style={styles.commonTextStyle}>Facial Tissues</Text>
                        </View>



                        <View style={styles.fruitContainerStyle}>
                            <View style={{ flexDirection: 'column' }}>
                                <Text style={styles.commonTextStyle}>Foundation</Text>
                                <Text style={{ color: '#242424', fontSize: 12, }}>Lancome Teint Idole Ultra Wear, shade 140</Text>
                            </View>

                            <View style={{ flexDirection: 'row' }}>
                                <Text style={{ color: '#242424', fontSize: 18, fontWeight: 'bold', marginTop: 10 }}>1</Text>
                            </View>
                        </View>

                    </View>

                </View>





            </View>
        );
    }



    return (
        <View style={{ flex: 1, flexDirection: 'column', marginHorizontal: 20 }}>
            {/*<Text>LoginScreen Screen</Text>*/}
            {renderHeader()}
            {renderTitle()}
            {/*{renderFlatList()}*/}
        </View>
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
    fruitContainerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomWidth: 0.5,
        paddingBottom: 15,
        borderBottomColor: 'gray'
    },
    circleImage: {
        width: 30,
        height: 30,
        borderRadius: 400,
        borderColor: "red",
        marginHorizontal: 3
    },

    commonTextStyle: {
        color: '#242424',
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 10
    }




})