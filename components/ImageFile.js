import React from 'react';
import {View, 
        Text, 
        Image,
        StyleSheet,
        ScrollView,
    } from 'react-native';

const ImageFile = () => {
    return (
        <ScrollView>
        <View style={{ 
                backgroundColor: '#f5f1e1',                
                }}>
            
            <Text
                style={{
                    color: '3b7edb',
                    margin: 18,
                    fontSize: 30,
                    fontWeight: '700',
                    textAlign: 'center',
                    textShadowRadius: 20,
                    textShadowColor: 'orange',
                }}>ORDER NOW!
            </Text>

            <View style={styles.box1}>
                <View style={styles.boxhader} >
                    <Text style={{
                            fontSize: 25, 
                            fontWeight:'600',
                            color: '#4a4c52',  
                        }}>#Pizza
                    </Text>
                </View>
                <View style={styles.boximg}>
                    <Image
                        style= {styles.img} 
                        source={require("../assets/fastfood1.jpg")} />
                </View>
                <View style={styles.boxfooter} >
                    <Text style={{
                            fontSize: 20, 
                            fontWeight:'800',
                            color: 'black',
                        }}> $3.9
                    </Text>
                </View>
            </View>

            <View style={styles.box1}>
                <View style={styles.boxhader} >
                    <Text style={{
                            fontSize: 25, 
                            fontWeight:'600',
                            color: '#4a4c52',
                        }}>#Burger
                    </Text>
                </View>
                <View style={styles.boximg}>
                    <Image
                        style= {styles.img} 
                        source={require("../assets/fastfood2.jpg")} />
                    </View>
                <View style={styles.boxfooter} >
                <Text style={{
                            fontSize: 20, 
                            fontWeight:'800',
                            color: 'black',
                        }}> $1.9
                    </Text>
                </View>
            </View>
            
            <View style={styles.box1}>
                <View style={styles.boxhader} >
                    <Text style={{
                            fontSize: 25, 
                            fontWeight:'600',
                            color: '#4a4c52',
                        }}>#French fries
                    </Text>
                </View>
                <View style={styles.boximg}>
                    <Image
                        style= {styles.img} 
                        source={require("../assets/fastfood3.jpg")} />
                </View>
                <View style={styles.boxfooter} >
                    <Text style={{
                            fontSize: 20, 
                            fontWeight:'800',
                            color: 'black',
                        }}> $0.9
                    </Text>
                </View>
            </View>

            <View style={styles.box1}>
                <View style={styles.boxhader} >
                    <Text style={{
                            fontSize: 22, 
                            fontWeight:'600',
                            color: '#4a4c52',
                        }}>#BurgerFries Combo
                    </Text>
                </View>
                <View style={styles.boximg}>
                    <Image
                        style= {styles.img} 
                        source={require("../assets/fastfood4.jpg")} />
                </View>
                <View style={styles.boxfooter} >
                    <Text style={{
                            fontSize: 20, 
                            fontWeight:'800',
                            color: 'black',
                        }}>$1.9
                    </Text>
                </View>
            </View>
        </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    // container: {
    //     flex: 1,
    //     flexDirection: 'column',
    //     justifyContent: "center",
    //     alignItems: "center",
    // },
    img: {
        width: 250,
        height: 200,
        resizeMode: 'stretch',
        blurRadius: 9,
    },
    box1: {
        width: 255,
        height: 275,
        // justifyContent: 'center',
        // alignItems: 'center',
        marginTop: 10,
        marginBottom: 10,
        marginRight: 10, 
        marginLeft: 70,
        borderColor: 'gray',
        borderWidth: 2,
        // borderRadius: 5,
    },
    boxhader: {
        width: 250,
        height: 40,
        backgroundColor: 'white',
        // borderColor: 'black',
        // borderWidth: 1,
    },
    boxfooter: {
        width: 250,
        height: 30,
        backgroundColor: 'white',
        // borderColor: 'black',
        // borderWidth: 1,
    },
    boximg: {
        width: 250,
        height: 200,
        // borderColor: 'black',
        // borderWidth: 1,
    },
    

});

export default ImageFile;
