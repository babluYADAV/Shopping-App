import React, { useState } from 'react';
import {
    View, TextInput, StyleSheet, Text,
    Image,
    Keyboard,
    TouchableOpacity,
    KeyboardAvoidingView,
    ScrollView,
} from 'react-native';

import ImagePicker from 'react-native-image-crop-picker';


const Registration = () => {
    const [filePath, setFilePath] = useState('https://reactnative.dev/img/tiny_logo.png')


    const chooseFile = () => {
        console.log('image picklerrr')
        ImagePicker.openPicker({
            width: 300,
            height: 400,
            cropping: true
        }).then(image => {
            setFilePath(image.path.split('///', 2)[1])
            console.log(filePath);
        }).catch((error) => {
            console.log('eroorooooo', error)
        });
    };
    return (
<ScrollView>
        <View style={styles.mainBody}>
            <KeyboardAvoidingView enabled>

                <View style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginTop:40,
                }}>
                    <Image style={styles.ImageStyle} source={{ uri: filePath }} />
                    <TouchableOpacity
                        style={styles.buttonStyle}
                        activeOpacity={0.5}
                        onPress={() => { chooseFile() }}>

                        <Text style={styles.buttonTextStyle}> Choose Image</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.SectionStyle}>
                    <TextInput
                        style={styles.inputStyle}
                        placeholder="Enter username" //dummy@abc.com
                        placeholderTextColor="#8b9cb5"
                        autoCapitalize="none"
                        returnKeyType="next"
                    // underlineColorAndroid="#f000"

                    />
                </View>
                <View style={styles.SectionStyle}>
                    <TextInput
                        style={styles.inputStyle}
                        placeholder="Enter Email" //dummy@abc.com
                        placeholderTextColor="#8b9cb5"
                        autoCapitalize="none"
                        keyboardType="email-address"
                        returnKeyType="next"
                    // underlineColorAndroid="#f000"

                    />
                </View>

                <View style={styles.SectionStyle}>
                    <TextInput
                        style={styles.inputStyle}
                        placeholder="Enter Password" //12345
                        placeholderTextColor="#8b9cb5"
                        keyboardType="default"
                        onSubmitEditing={Keyboard.dismiss}
                        blurOnSubmit={false}
                        secureTextEntry={true}
                        // underlineColorAndroid="#f000"
                        returnKeyType="next"
                    />
                </View>
                <View style={styles.SectionStyle}>
                    <TextInput
                        style={styles.inputStyle}
                        placeholder="Enter  address1" //12345
                        placeholderTextColor="#8b9cb5"
                        keyboardType="default"
                       
                        // underlineColorAndroid="#f000"
                        returnKeyType="next"
                    />
                </View>
                <View style={styles.SectionStyle}>
                    <TextInput
                        style={styles.inputStyle}
                        placeholder="Enter address2" //12345
                        placeholderTextColor="#8b9cb5"
                        keyboardType="default"
                       
                        // underlineColorAndroid="#f000"
                        returnKeyType="next"
                    />
                </View>
                <View style={styles.SectionStyle}>
                    <TextInput
                        style={styles.inputStyle}
                        placeholder="Enter pinCode" //12345
                        placeholderTextColor="#8b9cb5"
                        keyboardType="default"
                
                        // underlineColorAndroid="#f000"
                        returnKeyType="next"
                    />
                </View>
                <View style={styles.SectionStyle}>
                    <TextInput
                        style={styles.inputStyle}
                        placeholder="Enter  city" //12345
                        placeholderTextColor="#8b9cb5"
                        keyboardType="default"
                        
                        // underlineColorAndroid="#f000"
                        returnKeyType="next"
                    />
                </View>
                <View style={styles.SectionStyle}>
                    <TextInput
                        style={styles.inputStyle}
                        placeholder="Enter state" //12345
                        placeholderTextColor="#8b9cb5"
                        keyboardType="default"
                        onSubmitEditing={Keyboard.dismiss}
                        blurOnSubmit={false}
                       
                        // underlineColorAndroid="#f000"
                        returnKeyType="next"
                    />
                </View>

                <TouchableOpacity
                    style={styles.buttonStyle}
                    activeOpacity={0.5}
                >
                    <Text style={styles.buttonTextStyle}>Register</Text>
                </TouchableOpacity>


            </KeyboardAvoidingView>
        </View>
        </ScrollView>
    );
};




const styles = StyleSheet.create({
    mainBody: {
      
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#307ecc',
        alignContent: 'center',
    },
    SectionStyle: {
        flexDirection: 'row',
        height: 40,
        marginTop: 20,
        marginLeft: 35,
        marginRight: 35,
        margin: 10,
    },
    ImageStyle: {

        backgroundColor: 'lightgrey',
        height: 200,
        width: 200,
        borderWidth: 1,
        borderRadius: 30,

    },
    buttonStyle: {
        backgroundColor: '#7DE24E',
        borderWidth: 0,
        color: '#FFFFFF',
        borderColor: '#7DE24E',
        height: 40,
        alignItems: 'center',
        borderRadius: 30,
        marginLeft: 35,
        marginRight: 35,
        marginTop: 20,
        marginBottom: 25,
    },
    buttonTextStyle: {
        color: '#FFFFFF',
        paddingVertical: 10,
        fontSize: 16,
    },
    inputStyle: {
        flex: 1,
        color: 'white',
        paddingLeft: 15,
        paddingRight: 15,
        borderWidth: 1,
        borderRadius: 30,
        borderColor: '#dadae8',
    },
    registerTextStyle: {
        color: '#FFFFFF',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 14,
        alignSelf: 'center',
        padding: 10,
    },
    errorTextStyle: {
        color: 'red',
        textAlign: 'center',
        fontSize: 14,
    },
});

export default Registration;