import React, {useState, useEffect} from 'react';
import { TextInput, KeyboardAvoidingView, StyleSheet, View, Button } from 'react-native';
import ProtoTypes from 'prop-types';

const AddContactForm = props => {
    const [date, getDate] = useState({name: '', phone: ''});
    const {name, phone} = date
    const [validForm, isValidForm] = useState(false);

    const getHandler = key => val => getDate({...date,[key]: val})

    const submit = () => {
        props.onSubmit(date)
    }
    return(
        <KeyboardAvoidingView behavior="padding" style={style.container}>
          <TextInput
           style={style.inputs}
           value={name}
           placeholder="Name..."
           onChangeText={getHandler('name')}/>
          <TextInput
           style={style.inputs}
           value={phone}
           onChangeText={getHandler('phone')}
           placeholder="Phone Number"
           keyboardType="numeric" />
           <Button title="go" onPress={submit}/>
        </KeyboardAvoidingView >
      )

}
export default AddContactForm;
const style = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      paddingTop: 2,
      justifyContent: 'center'
    },
    inputs: {
      padding: 5,
      borderColor: 'black',
      borderWidth: 1,
      marginTop: 10,
      marginHorizontal: 10,
      paddingHorizontal: 10,
      paddingVertical: 10,
      borderRadius: 6
    },
  })