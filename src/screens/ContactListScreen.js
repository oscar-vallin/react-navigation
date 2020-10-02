import React, {useState} from 'react';
import {View, Button,Text, StyleSheet} from 'react-native';
import SectionListContacts from '../components/SectionListContacts';

export default function ContactListScreen({route, navigation}){
    console.log("#####################")
    const [showContacts, getShowContacts] = useState(false);
    const toggleContacts = () => getShowContacts(prevState => !prevState);
    const show = () => navigation.navigate('AddContact')
    
    return(
        <View style={style.main} >
        <Button  title="toggle contacts" onPress={toggleContacts}/>
        <Button title="Add Contact" onPress={show}/>
        {showContacts && <SectionListContacts contacts={route.params.contact}/>}
        </View>
    );
}
const style = StyleSheet.create({
    main: {
      flex: 1,
      paddingTop: 20,
      marginHorizontal: 100,
      marginTop: 20,
    },
  })