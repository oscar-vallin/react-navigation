import React from 'react';
import {Text, View, Button} from 'react-native';

export default function Index ({navigation}){
    const toGoSettings = () => navigation.navigate("ContactList");
    return(
        <View>
            <Text>Ey Index</Text>
            <Button title="Go to settings" onPress={toGoSettings}/>
        </View>
    );
}