import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    Button
} from 'react-native';
// import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
// import Login from './components/Login';
// import UserInfo from './components/UserInfo';

const App = () => {
    return (
        <View>

            <Text style={home.block1}>
                Full Name
            </Text>
            <Text style={home.block1}>
                Email
            </Text>
            <Text style={home.block1}>
                Mobile number
            </Text>
            <Text style={home.block1}>
                Password
            </Text>
            {/* <FontAwesome5 name={'comments'} size={100} /> */}

        </View>
    );
};

const home = StyleSheet.create({
    block1:{
        fontSize: 20,
        
        color: 'black',
        padding: 20,
        marginTop: 20,
        marginBottom: 20,
        marginRight: 40,
        marginLeft: 40,
        borderBottomWidth: 1,
        borderBottomColor: 'lightgray',
    },
}) 

export default App;







