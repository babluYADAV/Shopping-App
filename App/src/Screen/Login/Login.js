import React from 'react';
import { View ,TextInput,StyleSheet, Text,
    Image,
    Keyboard,
    TouchableOpacity,
    KeyboardAvoidingView,
    ScrollView,} from 'react-native';

const Login = ({navigation}) => {
    console.log('/////////////////////////////////')
  // Try removing the `height: '100%'` on the parent View.
  // The parent will not have dimensions, so the children can't expand.
  return (
   
             <View style={styles.mainBody}>
          <KeyboardAvoidingView enabled>
          <View style={styles.SectionStyle}>
    <TextInput
                style={styles.inputStyle}
                placeholder="Enter Email" //dummy@abc.com
                // placeholderTextColor="#8b9cb5"
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
                // placeholderTextColor="#8b9cb5"
                keyboardType="default"
                onSubmitEditing={Keyboard.dismiss}
                blurOnSubmit={false}
                secureTextEntry={true}
                // underlineColorAndroid="#f000"
                returnKeyType="next"
              />
              </View>

              <TouchableOpacity
              style={styles.buttonStyle}
              activeOpacity={0.5}
              onPress={() => navigation.navigate('Home')}>
        
              <Text style={styles.buttonTextStyle}>LOGIN</Text>
            </TouchableOpacity>

            <Text
              style={styles.registerTextStyle}
              onPress={() => navigation.navigate('Registration')}>
              New Here ? Register
            </Text>
              </KeyboardAvoidingView>
              </View>
            
            
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
  
export default Login;