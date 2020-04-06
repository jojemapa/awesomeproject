import React from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import HomeScreen from '../screens/HomeScreen';
import CommuteScreen from '../screens/CommuteScreen';
import SavedScreen from '../screens/SavedScreen';
import ContributionScreen from '../screens/ContributionScreen';
import UpdatesScreen from '../screens/UpdatesScreen';

import TabBarIcon from '../components/TabBarIcon';
import Colors from '../constants/Colors';

import 'react-native-gesture-handler';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => (
  <NavigationContainer>
    <StatusBar barStyle="dark-content" />
    <Tab.Navigator
      headerMode="none"
      tabBarOptions={{
        style: {height: 40, paddingBottom: 2, paddingTop: 2},
        activeTintColor: Colors.tabIconSelected,
        inactiveTintColor: Colors.tabIconDefault,
      }}>
      <Tab.Screen
        name="Explore"
        component={HomeScreen}
        options={{
          title: 'Explore',
          tabBarIcon: ({focused}) => (
            <TabBarIcon focused={focused} name="map-pin" />
          ),
        }}
      />
      <Tab.Screen
        name="Commute"
        component={CommuteScreen}
        options={{
          title: 'Commute',
          tabBarIcon: ({focused}) => (
            <TabBarIcon focused={focused} name="activity" />
          ),
        }}
      />
      <Tab.Screen
        name="Saved"
        component={SavedScreen}
        options={{
          title: 'Saved',
          tabBarIcon: ({focused}) => (
            <TabBarIcon focused={focused} name="bookmark" />
          ),
        }}
      />
      <Tab.Screen
        name="Contribution"
        component={ContributionScreen}
        options={{
          title: 'Contribution',
          tabBarIcon: ({focused}) => (
            <TabBarIcon focused={focused} name="plus-circle" />
          ),
        }}
      />
      <Tab.Screen
        name="Updates"
        component={UpdatesScreen}
        options={{
          title: 'Updates',
          tabBarIcon: ({focused}) => (
            <TabBarIcon focused={focused} name="bell" />
          ),
        }}
      />
    </Tab.Navigator>
  </NavigationContainer>
);

export default BottomTabNavigator;
