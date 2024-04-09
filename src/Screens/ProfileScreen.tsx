import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, SafeAreaView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'

const ProfileScreen = () => {
    return (
       <SafeAreaView>
            <View style={styles.topSection}>
                <Image
                    source={require('../assets/Images/BunLogo.jpg')}
                    style={styles.logo}
                />
                <Text style={styles.HeadText}>Profile</Text>
            </View>
            <View style={styles.line} />
                <TouchableOpacity>
                    <View style={styles.LineCont1}>
                        <Icon name="arrow-forward" size={20} color="black" />
                        <View style={{ paddingRight: 120 }}>
                            <Text style={styles.LineTxt}>Personal Information</Text>
                        </View>
                        <Icon name="arrow-forward" size={20} color="black" />
                    </View>
                </TouchableOpacity>
                <View style={styles.line} />
                <TouchableOpacity>
                    <View style={styles.LineCont}>
                        <Icon name="arrow-forward" size={20} color="black" />
                        <View style={{ paddingRight: 120 }}>
                            <Text style={styles.LineTxt}>Password & security</Text>
                        </View>
                        <Icon name="arrow-forward" size={20} color="black" />
                    </View>
                </TouchableOpacity>
                <View style={styles.line} />
                <TouchableOpacity>
                    <View style={styles.LineCont}>
                        <Icon name="arrow-forward" size={20} color="black" />
                        <View style={{ paddingRight: 165}}>
                            <Text style={styles.LineTxt}>Reward history</Text>
                        </View>
                        <Icon name="arrow-forward" size={20} color="black" />
                    </View>
                </TouchableOpacity>
                <View style={styles.line} />
                <TouchableOpacity>
                    <View style={styles.LineCont}>
                        <Icon name="arrow-forward" size={20} color="black" />
                        <View style={{ paddingRight: 220 }}>
                            <Text style={styles.LineTxt}>Favorite</Text>
                        </View>
                        <Icon name="arrow-forward" size={20} color="black" />
                    </View>
                </TouchableOpacity>
                <View style={styles.line} />
                <TouchableOpacity>
                    <View style={styles.LineCont}>
                        <Icon name="arrow-forward" size={20} color="black" />
                        <View style={{ paddingRight: 220 }}>
                            <Text style={styles.LineTxt}>App info</Text>
                        </View>
                        <Icon name="arrow-forward" size={20} color="black" />
                    </View>
                </TouchableOpacity>
                <View style={styles.line} />
                <TouchableOpacity>
                    <View style={styles.LineCont}>
                        <Icon name="arrow-forward" size={20} color="black" />
                        <View style={{ paddingRight: 220 }}>
                            <Text style={styles.LineTxt}>Logout</Text>
                        </View>
                        <Icon name="arrow-forward" size={20} color="black" />
                    </View>
                </TouchableOpacity>
                <View style={styles.line} />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {

    },
    topSection: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20,
        justifyContent: 'space-between'

    },
    logo: {
      margin:5
    },
    HeadText: {
        paddingRight: 130,
        paddingTop: 20,
        fontSize: 24,
        fontWeight: 'bold',
        color: 'black',
        marginBottom: 70,
        top: 30
    },
    line: {
        borderBottomColor: '#000000',
        borderBottomWidth: 0.5,
        padding: 5
    },
    LineCont: {
        paddingTop:25,
        paddingHorizontal: 15,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    LineCont1:{
        paddingTop:60,
        paddingHorizontal: 15,
        flexDirection: 'row',
        justifyContent: 'space-between' 
    },
    LineTxt: {
        color: 'black',
        fontWeight: '400',
        fontSize: 18
    }
});

export default ProfileScreen;
