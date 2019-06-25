import * as WebBrowser from 'expo-web-browser';
import React, { useEffect} from 'react';
import styled from 'styled-components/native';
import testData, {myTimer} from './test-data';

export default function StyledScreen() {
  myTimer('styled');
  useEffect(() => {
    myTimer('styled');
  });
  const StyledScrollView = styled.ScrollView`
    flex: 1;
  `;
  const StyledRow = styled.View`
    padding-top: 5;
    padding-bottom: 5;
    border-bottom-width: 1;
    border-bottom-color: grey;
  `;
  const StyledText = styled.Text``;
  return (
    <StyledScrollView>
        {testData.map((row, index) => (
          <StyledRow key={index}><StyledText>{row.name}</StyledText></StyledRow>
        ))}
    </StyledScrollView>
  );
}

StyledScreen.navigationOptions = {
  header: null,
};

