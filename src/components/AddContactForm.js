import React, {useState, useEffect} from 'react';
import { TextInput, KeyboardAvoidingView, StyleSheet, View, Button } from 'react-native';
import ProtoTypes from 'prop-types';

const AddContactForm = ({route, navigation}) => {
    const [date, getDate] = useState({name: '', phone: ''});
    const {name, phone} = date
    const [isvalidForm, getValidForm] = useState(false);

    useEffect(() => {
      if(name !== "" || phone !== "") {
        validForm()
      }
    })
    const getHandler = key => val => getDate({...date,[key]: val});

    const  validForm = () => {
      if(+phone >= 0 && phone.length === 10 && name.length >=5){
        getValidForm(false)
      }else{
        getValidForm(true)
        }
      };

    const submit = () =>  {
      route.params.addContacts(date);
      navigation.navigate("FirstView")
    }

    return(
        <View behavior="padding" style={style.container}>
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
           <Button title="Add" onPress={submit} disabled={isvalidForm}/>
        </View >
      )

}
export default AddContactForm;
const style = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      paddingTop: 2,
      justifyContent: 'center',
      marginHorizontal: 30,
      paddingHorizontal: 30
    },
    inputs: {
      padding: 5,
      borderColor: 'black',
      borderWidth: 1,
      marginTop: 10,
      marginHorizontal: 10,
      paddingHorizontal: 10,
      paddingVertical: 10,
      borderRadius: 6,
      marginBottom: 30
    },
  })