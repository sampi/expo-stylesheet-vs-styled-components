import React from 'react';
import { Platform } from 'react-native';
import {
  createStackNavigator,
  createBottomTabNavigator,
} from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import StyleSheetScreen from '../screens/StyleSheetScreen';
import StyledScreen from '../screens/StyledScreen';
import StyleSheetFlatScreen from '../screens/StyleSheetFlatScreen';

const StyleSheetStack = createStackNavigator({
  StyleSheet: StyleSheetScreen,
});

StyleSheetStack.navigationOptions = {
  tabBarLabel: 'StyleSheet',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'md-information-circle'
      }
    />
  ),
};

const StyleSheetFlatStack = createStackNavigator({
  StyleSheetFlat: StyleSheetFlatScreen,
});

StyleSheetFlatStack.navigationOptions = {
  tabBarLabel: 'StyleSheet.flatten',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'md-information-circle'
      }
    />
  ),
};

const StyledStack = createStackNavigator({
  Styled: StyledScreen,
});

StyledStack.navigationOptions = {
  tabBarLabel: 'styled-components',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-link' : 'md-link'}
    />
  ),
};

export default createBottomTabNavigator({
  StyleSheetStack,
  StyleSheetFlatStack,
  StyledStack,
});
