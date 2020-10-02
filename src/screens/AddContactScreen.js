import React from 'react';
import AddContactForm from '../components/AddContactForm';

const  AddContactScreen = ({route, navigation}) => {
   const handleSubmit = formState => {
       route.params.addContacts(formState);
       navigation.navigate('ContactList');
   }
    return <AddContactForm onSubmit={handleSubmit}/>
}

  
export default AddContactScreen;