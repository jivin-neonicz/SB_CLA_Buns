import React from 'react';
import { View, Text, StyleSheet, Image, SafeAreaView } from 'react-native';
import QRCode from 'react-native-qrcode-svg';

const QrScreen = () => {
    return (
       <SafeAreaView>
            <View style={styles.container}>
                <View style={styles.shadowContainer}>
                    <Text style={styles.point}>200</Text>
                    <Text style={styles.seprator}>/</Text>
                    <Text style={styles.total}>500</Text>
                    <Image source={require('../assets/Images/coin.png')} style={{ marginLeft: 5 }} />
                </View>
            </View>
            <Text style={styles.heading}>Scan to Earn and Redeem Points</Text>
            <View>
                <View style={styles.QrshadowContainer}>
                    <View style={styles.QrCont}>
                        <QRCode
                            size={150}
                        />
                    <Text style={styles.scanText}>Scan to redeem offer</Text>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    );
};



const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        marginTop: 80
    },
    shadowContainer: {
        alignSelf: 'center',
        marginVertical: 20,
        paddingHorizontal: 20,
        borderColor: 'white',
        borderWidth: 3,
        backgroundColor: '#FFD33F',
        borderRadius: 10,
        shadowColor: '#000000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.5,
        shadowRadius: 3.84,
        elevation: 10,
        flexDirection: 'row',
        alignItems: 'center',
    },
    point: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'black',
        paddingLeft: 8
    },
    total: {
        fontWeight: 'bold',
        color: 'black',
        fontSize: 16,
    },
    seprator: {
        fontWeight: 'normal',
        color: 'black',
        fontSize: 28
    },
    heading: {
        fontWeight: 'bold',
        color: 'black',
        fontSize: 16,
        textAlign: 'center',
        marginTop: 50
    },
    QrshadowContainer: {
        alignSelf: 'center',
        marginVertical: 30,
        paddingHorizontal: 60,
        borderColor: 'white',
        borderWidth: 3,
        backgroundColor: '#FFD33F',
        borderRadius: 10,
        shadowColor: '#000000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.5,
        shadowRadius: 3.84,
        elevation: 10,
        alignItems: 'center',
    },
    QrCont:{
        marginTop:40,
        marginBottom:60,
        backgroundColor:'white',
        height:'auto',
        borderColor:'white',
        borderWidth:10,
        borderRadius:10
    },
    scanText: {
        textAlign: 'center',
        fontSize: 14,
        fontWeight: '400',
        marginTop:2
    },
});

export default QrScreen;
