import React, {useState} from 'react';
import {Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Home from './src/views/Home';
import Index from './src/views/Index';
import Settings from './src/views/Settings';

import ContactListScreen from './src/screens/ContactListScreen';
import contacts from './src/components/Contacts';
import AddContactScreen from './src/screens/AddContactScreen';
import { concat } from 'react-native-reanimated';

export default function App(){
 const [contact, getDates] =useState(contacts);

 function addContacts(newContact){
  getDates([...contact,newContact])
 }

  const Stack = createStackNavigator();
  return(
      <NavigationContainer>
        <Stack.Navigator initialRouteName="ContactList" >
          <Stack.Screen name="Index" component={Index} />
          <Stack.Screen name="ContactList" component={ContactListScreen} initialParams={{contact}}/>
          <Stack.Screen name="AddContact" component={AddContactScreen} initialParams={{addContacts}}/>
        </Stack.Navigator>
      </NavigationContainer>
  );
}
