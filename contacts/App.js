import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, Button, FlatList } from 'react-native';
import * as Contacts from 'expo-contacts';

export default function App() {

  const [contact, setContact]= useState([]);

  const getContacts = async() => {
    const { status } = await Contacts.requestPermissionsAsync();

    if ( status=== 'granted') {
      const { data } = await Contacts.getContactsAsync({ 
        fields:[Contacts.Fields.PhoneNumbers],
      });

      setContact(data);
      console.log(data);

      if (data.length> 0) {
        
       
      }
    }
  }


  return (
    <View style={styles.container}>
      <FlatList
       data = {contact} 
       renderItem = {({item}) => <Text> {item.name} </Text>}
       keyExtractor = {item => item.id}
      />
         

      <Button title = "hae yhteystiedot" onPress={getContacts} />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
