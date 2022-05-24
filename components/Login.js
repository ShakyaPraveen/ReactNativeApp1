// working on it
import React from 'react';
import {View, 
        Text, 
        TextInput, 
        StyleSheet,
        Button, 
        } from 'react-native';

const Login = () => {
    return(
        <View>
            <Text
                style={{fontSize: 25, 
                        fontWeight: 'bold', 
                        color: 'black', 
                        margin: 25,
                        textAlign: 'center',}}>
                    Backery at your doorstep
            </Text>
            <TextInput 
                style={styles1.Textdesign}
                placeholder='Select Area'
                onChangeText={()=>{console.warn("hello userr")}}/>           

            {/* <View style={{flex: 1, flexDirection: 'row'}}>
                <View style={{flex: 1, backgroundColor: 'red'}}>
                    
                </View>
                <View  style={{flex: 1 backgroundColor: 'orange'}}>
                    
                </View>
                <View  style={{flex: 1 backgroundColor: 'green'}}>
                    
                </View>
            </View> */}
        </View>



    );
};


const styles1 = StyleSheet.create({
    Textdesign:{
        fontSize: 20,
        // fontWeight: 'bold',
        color: 'black',
        marginTop: 20,
        marginBottom: 20,
        marginRight: 45,
        marginLeft: 45,
        borderColor: 'lightgray',
        borderBottomWidth: 1,
        flexDirection: 'row',
        
    },

    ShopNowBtn:{

    },
})

export default Login;