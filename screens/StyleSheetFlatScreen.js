import * as WebBrowser from 'expo-web-browser';
import React, { useEffect} from 'react';
import { ScrollView, StyleSheet, View, Text } from 'react-native';
import testData, {myTimer} from './test-data';

const thing = {
    flex: 1,
  };

export default function StyleSheetFlatScreen() {
  myTimer('StyleSheet inline flatten');
  useEffect(() => {
    myTimer('StyleSheet inline flatten');
  });
  return (
    <ScrollView style={{
    flex: 1,
  }}>
        {testData.map((row, index) => (
          <View style={{
    paddingTop: 5,
    paddingBottom: 5,
    borderBottomWidth: 1,
    borderBottomColor: 'grey',
    ...thing
  }} key={index}><Text>{row.name}</Text></View>
        ))}
      </ScrollView>
  );
}

StyleSheetFlatScreen.navigationOptions = {
  header: null,
};

