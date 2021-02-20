import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { View, Text } from 'react-native'

import DeckDetailStyles from '../styles/DeckDetail'

const DeckDetail = ({deck}) => (
  <View style={DeckDetailStyles.view}>
    <View style={DeckDetailStyles.headerSection}>
      <Text style={DeckDetailStyles.title}>{deck.title}</Text>
      <Text style={DeckDetailStyles.count}>
        {deck.questions.length}
        {' '}
        Cards
      </Text>
    </View>
  </View>
  )

DeckDetail.propTypes = {
  deck: PropTypes.shape({
    title: PropTypes.string.isRequired,
    questions: PropTypes.array.isRequired
  }).isRequired
}

const mapStateToProps = (decks, {route}) => {
  const { params: { deckTitle } } = route
  return {deck: decks[deckTitle]}
}

export default connect(mapStateToProps)(DeckDetail)