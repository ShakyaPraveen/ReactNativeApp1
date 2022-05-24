import React from 'react';
import {
    View,
    Text,
    TextInput,
    StyleSheet,
    Button,
    Image,
} from 'react-native';
import { isRequired } from 'react-native/Libraries/DeprecatedPropTypes/DeprecatedColorPropType';
// import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';


const categories = () => {
    return(
        <View>
            <Image
                style={mystyles.logo}
                source={isRequired('https://www.google.com/search?q=images&sxsrf=ALiCzsafa3RIoqHMD6yLQG8tbEO425TbBA:1653302071450&source=lnms&tbm=isch&sa=X&ved=2ahUKEwiYgrOVtvX3AhXu7XMBHR54D-kQ_AUoAXoECAEQAw&biw=1366&bih=657&dpr=1#imgrc=2nDXavJs9DoKTM')}
            />

            
           

        </View>
    );
};

const mystyles = StyleSheet.create({

    logo:{
        width: 100,
        height: 100,
    },
})

export default Demo1;
