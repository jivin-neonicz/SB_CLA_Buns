import React from "react";
import { View, Text, SafeAreaView, TextInput, ScrollView } from "react-native";
import { HeartIcon, PhoneIcon } from "../assets/Images/icon";

const PersonalInfo = () => {
    return (
        <ScrollView>
        <SafeAreaView>
            <View style={{flexDirection:'row',justifyContent:'space-between',paddingTop:50,paddingHorizontal:15}}>
                <PhoneIcon width={40} height={40}/>
                <Text style={{fontSize:16,color:'black',fontWeight:'bold',alignSelf:'center'}}>Personal Info</Text>
                <HeartIcon width={40} height={40} />
            </View>
            <View style={{paddingTop:80,paddingLeft:25}}>
                <Text style={{fontSize:24,color:'black',fontWeight:'400'}}>Name</Text>
            </View>
            <View style={{paddingHorizontal:25,paddingTop:30}}>
                <Text>Email</Text>
                <TextInput>alia </TextInput>
                <View style={{borderBottomColor: '#000000',borderBottomWidth: 0.5,}} />
            </View>
            <View style={{paddingHorizontal:25,paddingTop:35}}>
                <Text>Phone Number</Text>
                <TextInput>+98765453210 </TextInput>
                <View style={{borderBottomColor: '#000000',borderBottomWidth: 0.5,}} />
            </View>
            <View style={{paddingHorizontal:25,paddingTop:35}}>
                <Text>DOB</Text>
                <TextInput>Add Dob </TextInput>
                <View style={{borderBottomColor: '#000000',borderBottomWidth: 0.5,}} />
            </View>
            <View style={{paddingHorizontal:25,paddingTop:35}}>
                <Text>Gender</Text>
                <TextInput>Female</TextInput>
                <View style={{borderBottomColor: '#000000',borderBottomWidth: 0.5,}} />
            </View>
            <View style={{paddingHorizontal:25,paddingTop:35}}>
                <Text>Member Since</Text>
                <TextInput>20/11/2023</TextInput>
            </View>
        </SafeAreaView>
        </ScrollView>
    )
}
export default PersonalInfo;
