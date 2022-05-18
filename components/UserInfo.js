// import React from 'react';
// import type {Node} from 'react';
// import {
//   SafeAreaView,
//   ScrollView,
//   StatusBar,
//   StyleSheet,
//   Text,
//   useColorScheme,
//   View,
// } from 'react-native';

// import {
//   Colors,
//   DebugInstructions,
//   Header,
//   LearnMoreLinks,
//   ReloadInstructions,
// } from 'react-native/Libraries/NewAppScreen';

// const Section = ({children, title}): Node => {
//   const isDarkMode = useColorScheme() === 'dark';
//   return (
//     <View style={styles.sectionContainer}>
//       <Text
//         style={[
//           styles.sectionTitle,
//           {
//             color: isDarkMode ? Colors.white : Colors.black,
//           },
//         ]}>
//         {title}
//       </Text>
//       <Text
//         style={[
//           styles.sectionDescription,
//           {
//             color: isDarkMode ? Colors.light : Colors.dark,
//           },
//         ]}>
//         {children}
//       </Text>
//     </View>
//   );
// };

// const App: () => Node = () => {
//   const isDarkMode = useColorScheme() === 'dark';

//   const backgroundStyle = {
//     backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
//   };

//   return (
//     <SafeAreaView style={backgroundStyle}>
//       <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
//       <ScrollView
//         contentInsetAdjustmentBehavior="automatic"
//         style={backgroundStyle}>
//         <Header />
//         <View
//           style={{
//             backgroundColor: isDarkMode ? Colors.black : Colors.white,
//           }}>
//           <Section title="Step One ">
//             Edit <Text style={styles.highlight}>App.js</Text> to change this
//             screen and then come back to see your edits.
//           </Section>
//           <Section title="See Your Changes">
//             <ReloadInstructions />
//           </Section>
//           <Section title="Debug">
//             <DebugInstructions />
//           </Section>
//           <Section title="Learn More">
//             Read the docs to discover what to do next:
//           </Section>
//           <LearnMoreLinks />
//         </View>
//       </ScrollView>
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   sectionContainer: {
//     marginTop: 32,
//     paddingHorizontal: 24,
//   },
//   sectionTitle: {
//     fontSize: 24,
//     fontWeight: '600',
//   },
//   sectionDescription: {
//     marginTop: 8,
//     fontSize: 18,
//     fontWeight: '400',
//   },
//   highlight: {
//     fontWeight: '700',
//   },
// });

// export default App;

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


            {/* <Text style={home.grocery}>
                Grocery at your doorstep
            </Text> */}
            {/* <FontAwesome5 name={'map'} size={20} /> */}
            {/* <Text>Select Areaa</Text>

            {/* <Login /> */}
            {/* <UserInfo /> */}

            
            {/* <Image 
                // style={width: 50, height: 50,}
                source={require('../src/images/amazon.png')}>

            </Image> */}

            {/* <Button 
                style={home.button1}
                title='Shop Now'
                onclick={() => Alert.alert('Button Clicked!')}
            /> */}





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

// const Praveen = (props) => {
//     return(
//         <View>
//             <Text style={{
//                 color: 'red', 
//                 fontSize: 30, 
//                 backgroundColor: 'green',
//                 margin: 10,
//                 padding: 10,
//                 textAlign: 'center',
//                 alignContent: 'center',
//                 justifyContent: 'center',
//                 }}>This is simple text. written by {props.name}</Text>
//         </View>
        
//     );
// };

// const mystyles =  StyleSheet.create({
//     container: {
//         fontSize: 30,
//         fontWeight: 'bold',
//         color: 'blue',
//         textAlign: 'center',
//         backgroundColor: 'lightgray',
//         paddingTop: 50,
//         paddingBottom: 50,
//         paddingRight: 20,
//         paddingLeft: 20,
//         margin: 20,
//         borderWidth: 3,
//         borderColor: 'black',
//         borderRadius: 8,
//     },

// })

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

    // butt1:{
    //     fontSize: 18,
    //     color: 'black',
        
    // },

    // grocery:{
    //     fontWeight: 'bold',
    //     fontSize: 20,
    //     color: 'black',
    //     textAlign: 'center',
    //     margin: 15,
    // },

    // button1:{
    //     backgroundColor: 'green',
    //     color: 'black',
        
    // },
}) 

export default App;







