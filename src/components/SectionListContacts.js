import React from 'react';
import {Text, SectionList} from 'react-native';
import Row from './Row';

const renderItem = ({item}) => <Row {...item}/>;
const renderSectionHeader = ({section}) => <Text>{section.title}</Text>;

const SelectionListContacts = ({route}) => {
    
    const contactsByLetter = route.params.date.reduce((obj, contact) => {
        const firstLetter = contact.name[0].toUpperCase()
        return {
          ...obj,
          [firstLetter]: [...(obj[firstLetter] || []), contact],
        }
      }, {})
    
      const sections = Object.keys(contactsByLetter).sort().map(letter => ({
        data: contactsByLetter[letter],
        title: letter,
      }))
      return <SectionList
       keyExtractor={(item, index) => item+index}
       sections={sections}
       renderItem={renderItem} 
       renderSectionHeader={renderSectionHeader}/>
    }
export default SelectionListContacts;
