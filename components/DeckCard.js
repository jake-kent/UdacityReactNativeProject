import React from 'react'
import PropTypes from 'prop-types'

import { View, Text } from 'react-native'

import DeckCardStyles from '../styles/DeckCard'

const DeckCard = ({deck, index}) => (
  <View style={[DeckCardStyles.view, index === 0 ? DeckCardStyles.first : {}]}>
    <Text style={DeckCardStyles.title}>{deck.title}</Text>
    <Text style={DeckCardStyles.count}>
      {deck.questions.length}
      {' '}
      Cards
    </Text>
  </View>
)

DeckCard.propTypes = {
  deck: PropTypes.shape({
    title: PropTypes.string.isRequired,
    questions: PropTypes.array.isRequired
  }).isRequired,
  index: PropTypes.number.isRequired
}

export default DeckCard