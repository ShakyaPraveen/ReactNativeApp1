// create account page
import React from 'react';
import {
    View,
    Text,
    TextInput,
    StyleSheet,
    Button,
} from 'react-native';
// import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';


const Demo1 = () => {
    return(
        <View
            >
            {/* <FontAwesome5 name={'user'} size={20} /> */}
            
            <Text
                style={{fontSize: 25, 
                        fontWeight: 'bold', 
                        color: 'black', 
                        margin: 25,}}>
                    Register
            </Text>
            <TextInput 
                style={styles1.Textdesign}
                placeholder='Enter Full Name'
                onChangeText={()=>{console.warn("hello userr")}}/>
            <TextInput 
                style={styles1.Textdesign}
                placeholder='Mobile Number'
                onChangeText={()=>{console.warn("hello user")}}/>
            <TextInput 
                style={styles1.Textdesign}
                placeholder='Email'
                onChangeText={()=>{console.warn("hello user")}}/>        
            <TextInput 
                style={styles1.Textdesign}
                placeholder='Password'
                onChangeText={()=>{console.warn("hello user")}}/>

            <Text>{'\n'}</Text>
            <Button title="Create Account"> </Button>
            <Text>{'\n'}</Text>
            <Text style={{textAlign:"center"}}>- - - - - - - - - - - - - - - - - - -   OR   - - - - - - - - - - - - - - - - - - -</Text>
            <Text style={mystyles.Continuebtn}>Continue with</Text>
            <Text>{'\n'}</Text>
            
            <View style={{flexDirection:'row', marginLeft: 90,}}>
                <View style={{paddingRight:50}}>
                    <Button title="Facebook"/>
                </View>
                <Button title="Google"/>
            </View>
            <Text style={{textAlign:"center"}}>Already Have an accoutn? <Text style={{color: 'blue'}}>click here!</Text></Text>
        </View>
    );
};

const mystyles = StyleSheet.create({
        Continuebtn:{
            color: 'white',
            textAlign:"center", 
            fontSize:20, 
            padding: 6,
            backgroundColor:"#3385ff", 
            borderBottomColor:"gray",
            borderBottomWidth:2, 
            borderRadius:2,
        }
})

const styles1 = StyleSheet.create({
    Textdesign:{
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black',
        marginTop: 20,
        marginBottom: 20,
        marginRight: 40,
        marginLeft: 40,
        borderColor: 'lightgray',
        borderBottomWidth: 1,
        flexDirection: 'row',
        
    },
})

export default Demo1;
