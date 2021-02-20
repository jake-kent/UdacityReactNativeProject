import React from 'react'
import PropTypes from 'prop-types'
import Constants from 'expo-constants';

import { View, StatusBar, Platform } from 'react-native'

function AppStatusBar({backgroundColor}) {
  let height = Constants.statusBarHeight
  if (Platform.OS === 'android') {
    // this is because I encountered a weird bug where
    // the appearance of the status bar on android was 
    // taking up 10 more units of space than it was holding
    // i.e. the first element on a page would appear to
    // start 10 units of space above where it should
    // be and be partially hidden behind the status bar
    height += 10
  }
  return (
    <View style={{backgroundColor, height}}>
      <StatusBar translucent backgroundColor={backgroundColor} />
    </View>
  )
}

AppStatusBar.propTypes = {
    backgroundColor: PropTypes.string.isRequired
}

export default AppStatusBar
