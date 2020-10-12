import React from 'react';
import {View, Button, StyleSheet} from 'react-native';

const Views = ({navigation}) => {
    return(
        <View style={styles.main}>
            <Button title="Show Contacts" onPress={() => navigation.navigate("ContactList")}/>
            <Button title="Add Contact" onPress={() => navigation.navigate("AddContact")}/>
        </View>
    )
}
export default Views;
const styles = StyleSheet.create({
    main: {
      flex: 1,
      paddingTop: 20,
      marginHorizontal: 100,
      marginTop: 20,
    },
  })