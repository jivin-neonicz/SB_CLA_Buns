import React, { useEffect, useState } from "react";
import { ScrollView, Text, View, StyleSheet, Image } from "react-native";
import { PhoneIcon } from "./assets/Images/icon";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useIsFocused } from "@react-navigation/native";
import axios from 'axios';



interface RewardDetails {
    userId: number;
    rewardPoint: number;
    redeemPoint: number;
    purchasedDate: any;
    purchasedAmount: number;
    redeemDate: any;
    currency: string;
}

const HistoryScreen = () => {
    const isFocused = useIsFocused();
    const [pointsDetails, setPointsDetails] = useState<RewardDetails[]>([]);


    useEffect(() => {
        const fetchData = async () => {
            try {
                if (isFocused) {
                    const data = await AsyncStorage.getItem("scannedData");
                    if (data) {
                        const parsedData: any = JSON.parse(data);
                        const endpoint =  `http://4.161.35.196:3500/userProfile/getLoyaltyPoints/2` ;
                        const loyaltyDetails = await axios.get(endpoint);
                        if (Array.isArray(loyaltyDetails.data)) {
                            setPointsDetails(loyaltyDetails.data);
                        } else {
                            console.error(
                                "Unexpected loyaltyDetails format:",
                                loyaltyDetails.data
                            );
                        }
                    }
                }
            } catch (error) {
                console.error("Error fetching loyalty details:", error);
            }
        };
        fetchData();
    }, [isFocused]);


    return (
        <ScrollView>
            <View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 15, paddingTop:50}}>
                    <PhoneIcon />
                    <Text style={{fontSize:18,fontWeight:'600',color:'black'}}>Reward History</Text>
                    <View style={styles.pointsContainer}>
                        <Image source={require('./assets/Images/coin.png')} style={styles.coinImage} />
                        <Text style={styles.pointsText}>100</Text>
                    </View>
                </View>
                <View style={{ flex: 1, marginBottom: 115 }}>
                    {pointsDetails.map((reward, index) => (
                        <View
                            key={index}
                            style={[
                                styles.rewardContainer,
                                {
                                    backgroundColor: reward.rewardPoint
                                        ? "rgba(152, 251, 152, 0.1)"
                                        : reward.redeemPoint
                                            ? "rgba(255, 127, 127, 0.1)"
                                            : "white",
                                },
                            ]}
                        >
                            <View style={styles.leftContent}>
                                <Text style={styles.date}>
                                    {reward.purchasedDate ? reward.purchasedDate : reward.redeemDate}
                                </Text>
                                <Text style={styles.price}>
                                    {reward.currency} {reward.purchasedAmount}
                                </Text>
                            </View>
                            <View style={styles.pointcnt}>
                                <View style={styles.rightContent}>
                                    <Text style={styles.point}>
                                        {reward.rewardPoint
                                            ? "+  " + reward.rewardPoint
                                            : "-  " + reward.redeemPoint}
                                    </Text>
                                </View>
                            </View>
                        </View>
                    ))}
                </View>
            </View>
        </ScrollView>
    );
};

export default HistoryScreen;

const styles = StyleSheet.create({
    pointsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    coinImage: {
        width: 20,
        height: 20,
        marginRight: 5,
    },
    pointsText: {
        fontSize: 16,
    },
    rewardContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderBottomColor: "#CCCCCC",
        margin: 10,
        borderRadius: 5,
        height: 65,
        width: "95%",
        top: 15,
    },
    leftContent: {
        flex: 1,
    },
    rightContent: {
        justifyContent: "flex-end",
    },
    point: {
        color: "green",
        fontWeight: "500",
        textAlign: "center",
        fontSize:18
    },
    price: {
        color:'black',
        fontSize: 18,
        fontWeight: "700",
    },
    date: {
        color: "#787878",
        fontSize: 16,
    },
    time: {
        color: "#787878",
        fontSize: 16,
        paddingLeft:5
    },
    dateTime: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    pointcnt: {
        height: 30,
        width: 80,
        backgroundColor: "#273860",
        borderRadius: 5,
        alignSelf: "center",
        justifyContent: "center",
    },
});
