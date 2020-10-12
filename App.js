import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Views from './src/components/Views'
import SectionList from './src/components/SectionListContacts';
import AddContact from './src/components/AddContactForm';
import contacts from './src/components/Contacts';


export default function App(){
 const [date, getDates] =useState(contacts);

 const addContacts = name => {
   getDates(prevState => ([...prevState,name]))
 }
console.log(date)
const Stack = createStackNavigator();
  return(
      <NavigationContainer>
        <Stack.Navigator initialRouteName="FirstView" >
          <Stack.Screen name="FirstView" component={Views} />
          <Stack.Screen name="ContactList" component={SectionList} initialParams={{date}}/>
          <Stack.Screen name="AddContact" component={AddContact} initialParams={{addContacts}}/>
        </Stack.Navigator>
      </NavigationContainer>
  );
}
