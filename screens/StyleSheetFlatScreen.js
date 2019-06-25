import * as WebBrowser from 'expo-web-browser';
import React, { useEffect} from 'react';
import { ScrollView, StyleSheet, View, Text } from 'react-native';
import testData, {myTimer} from './test-data';

const styles = StyleSheet.create({
  row: {
    paddingTop: 5,
    paddingBottom: 5,
    borderBottomWidth: 1,
    borderBottomColor: 'grey',
  },
  scrollView: {
    flex: 1,
  },
});

export default function StyleSheetFlatScreen() {
  myTimer('StyleSheet flatten');
  useEffect(() => {
    myTimer('StyleSheet flatten');
  });
  return (
    <ScrollView style={StyleSheet.flatten([styles.scrollView])}>
        {testData.map((row, index) => (
          <View style={StyleSheet.flatten([styles.row])} key={index}><Text>{row.name}</Text></View>
        ))}
      </ScrollView>
  );
}

StyleSheetFlatScreen.navigationOptions = {
  header: null,
};

