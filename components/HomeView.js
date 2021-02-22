import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { View, Text, FlatList, Pressable } from 'react-native'

import DeckCard from './DeckCard'

import HomeStyles from '../styles/HomeView'

const HomeView = ({decks, navigation}) => {
  const renderDeck = ({item, index}) => <Pressable onPress={() => navigation.push('DeckDetail', {deckTitle: item.title})}><DeckCard deck={item} index={index} /></Pressable>
  return (
    <View style={HomeStyles.view}>
      <Text style={HomeStyles.header}>
        Your Study Decks
        {' '}
        (
        {Object.keys(decks).length}
        )
      </Text>
      <FlatList
        style={HomeStyles.deckList}
        data={Object.values(decks)}
        renderItem={(item, index) => renderDeck(item, index)}
        keyExtractor={item => item.title}
      />
    </View>
  )
}

HomeView.propTypes = {
  decks: PropTypes.object.isRequired,
  navigation: PropTypes.object.isRequired
}

const mapStateToProps = (decks) => ({decks: typeof decks !== 'undefined' ? decks : {}})

export default connect(mapStateToProps)(HomeView)
