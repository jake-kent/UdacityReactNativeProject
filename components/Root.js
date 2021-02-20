import React, { useEffect, useState } from "react";
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { View, Platform } from "react-native";
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack'
import { Ionicons } from '@expo/vector-icons'
import AppLoading from 'expo-app-loading'

import AppStatusBar from './StatusBar'
import HomeView from './HomeView'
import AddDeckView from './AddDeckView'
import DeckDetail from './DeckDetail'

import colors from '../styles/colors'

import {loadDecks} from '../redux/actions/decks'
import { getStorage } from '../utils/AsyncStorage'

const Tab = createBottomTabNavigator()
const Stack = createStackNavigator()

const Tabs = () => (
  // eslint-disable-next-line react/jsx-filename-extension
  <Tab.Navigator
    tabBarOptions={{
      activeTintColor: colors.mahogany,
      style: {
        backgroundColor: 'white',
        shadowColor: 'rgba(0, 0, 0, 0.24)',
        shadowOffset: {
          width: 0,
          height: 3
        },
        shadowRadius: 6,
        shadowOpacity: 1
      }
    }}
    navigationOptions={{
      headers: null
    }}
  >
    <Tab.Screen
      name="Home"
      component={HomeView}
      options={{
        tabBarLabel: 'Home',
        // eslint-disable-next-line react/prop-types
        tabBarIcon: ({color}) => <Ionicons name='albums' size={30} color={color} />
      }}
    />
    <Tab.Screen
      name="Add Deck"
      component={AddDeckView}
      options={{
        tabBarLabel: 'Add Deck',
        // eslint-disable-next-line react/prop-types
        tabBarIcon: ({color}) => <Ionicons name='add-circle' size={30} color={color} />
      }}
    />
  </Tab.Navigator>
)

const NavStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      name='Home'
      component={Tabs}
      options={{
        headerTintColor: 'white',
        headerStyle: {
          backgroundColor: colors.mahogany
        }
      }}
    />
    <Stack.Screen
      name='DeckDetail'
      component={DeckDetail}
      options={({route}) => {
        const title = Platform.OS === 'ios' || Platform.OS === 'android'
          ? route.params.deckTitle
          : `Deck | ${route.params.deckTitle}`
        return {
        headerTintColor: 'white',
        headerStyle: {
          backgroundColor: colors.mahogany
        },
        title
      }}}
    />
  </Stack.Navigator>
)


function Root({dispatch}) {
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    const loadData = async () => {
      const decks = await getStorage()
      dispatch(loadDecks(decks))
      setLoading(false)
    }
    loadData()
  }, [])

  if (loading === true) {
    return <AppLoading />
  }

  return (
    <View style={{flex: 1}}>
      <AppStatusBar backgroundColor={colors.mahogany} barStyle='light-content' />
      <NavigationContainer>
        <NavStack />
      </NavigationContainer>
    </View>
  )
}

Root.propTypes = {
  dispatch: PropTypes.func.isRequired
}

export default connect()(Root)