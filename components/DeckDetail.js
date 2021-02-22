import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import AppLoading from 'expo-app-loading'
import { View, Text, Pressable } from 'react-native'

import ButtonStyles from '../styles/ButtonStyles'
import DeckDetailStyles from '../styles/DeckDetail'

const DeckDetail = ({deck, navigation}) => {
  if (typeof deck === 'undefined'){
    return <AppLoading />
  }
  const handleAddCard = (e) => {
    e.preventDefault()
    navigation.push('AddCard', {deckTitle: deck.title})
  }
  const handleStartQuiz = (e) => {
    e.preventDefault()
    navigation.push('Quiz', {deckTitle: deck.title})
  }
  return (
    <View style={DeckDetailStyles.view}>
      <View style={DeckDetailStyles.headerSection}>
        <Text style={DeckDetailStyles.title}>{deck.title}</Text>
        <Text style={DeckDetailStyles.count}>
          {deck.questions.length}
          {' '}
          Cards
        </Text>
      </View>
      <View style={DeckDetailStyles.buttonSection}>
        <Pressable onPress={handleAddCard} style={[ButtonStyles.inverted, DeckDetailStyles.addCardButton]}>
          <Text style={ButtonStyles.textInverted}>Add Card</Text>
        </Pressable>
        <Pressable
          disabled={deck.questions.length === 0}
          onPress={handleStartQuiz}
          style={deck.questions.length === 0 ? ButtonStyles.disabled : ButtonStyles.active}
        >
          <Text style={ButtonStyles.text}>Start Quiz</Text>
        </Pressable>
      </View>
    </View>
  )
}

DeckDetail.propTypes = {
  deck: PropTypes.shape({
    title: PropTypes.string.isRequired,
    questions: PropTypes.array.isRequired
  }).isRequired,
  navigation: PropTypes.object.isRequired
}

const mapStateToProps = (decks, {route}) => {
  const { params: { deckTitle } } = route
  return {deck: decks[deckTitle]}
}

export default connect(mapStateToProps)(DeckDetail)