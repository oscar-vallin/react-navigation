import React from 'react';

import { View, Text, StyleSheet } from 'react-native';

const Row = props => {
  return(
  <View style={styles.row}>
    <Text>{props.name}</Text>
    <Text>{props.phone}</Text>
  </View>
  )
}
export default Row;
const styles = StyleSheet.create({
    row : {
      padding: 20,
    }
});
  