//import liraries


====Profile=========
import React, { Component, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Button } from 'react-native';
import navigationString from '../../constants/navigationString';
import Login from '../Login/Login';






// create a component
const Home = ({ navigation }) => {
    const [email, setEmail] = useState('')


    const Submit=()=>{
        if(email === '' && password === '')
       
                {
                    alert('oops sorry!! enetr your email nd password')
                return
            }
            navigation.navigate(navigationString.LOGIN)
        
    }
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={()=>navigation.goBack()}>
              <Text></Text>  back</TouchableOpacity>
            <View>
                <Text>Email</Text>
                <TextInput
                    value='email'
                    onChangeText={(data) => setEmail(data)}
                    placeholder='enter mail'></TextInput>
                <View style={{ borderBottomColor: 'grey', borderWidth: .5 }}></View>
            </View>
            <View style={{ marginTop: 24 }}>
                <Text>Password</Text>
                <TextInput
                    placeholder='Enter Password'></TextInput>
                <View style={{ borderBottomColor: 'grey', borderWidth: .5 }}></View>
            </View>
           
                <TouchableOpacity onPress={()=>navigation.navigate(Login)}
                // onPress={() => Submit()}
                style={{ backgroundColor: 'red', height: 48, alignItems: 'center', justifyContent: 'center', marginTop: 48 }}>
                    <Text style={{ color: 'white' }}>click me</Text>
                </TouchableOpacity>
      

        </View>
    );
};


// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24

    },
});

//make this component available to the app
export default Home;