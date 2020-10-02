import React,{useState} from 'react';
import {Text, View, Button} from 'react-native';

export default function Settings ({navigation}){
    const [count, getCount] =useState(0)
    const toReturn = () => navigation.goBack("Index");
    return(
        <View>
            <Text>Settings</Text>
            <Button title="To Return" onPress={toReturn}/>
            <Button title="Go to Home" onPress={() => navigation.navigate("Home")}/>
        </View>
    );
}