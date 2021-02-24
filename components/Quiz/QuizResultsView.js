import React from 'react'
import PropTypes from 'prop-types'

import { View, Text, Pressable } from 'react-native'

import QuizResults from '../../styles/QuizResults'
import ButtonStyles from '../../styles/ButtonStyles'

const QuizResultsView = ({answers, reset, goBack}) => {
  const correctCount = answers.reduce((total, answer) => answer === true ? total + 1 : total, 0)
  const correctPercentage = Math.round((correctCount / answers.length) * 100)
  return (
    <View style={QuizResults.resultView}>
      <View style={QuizResults.resultsWrapper}>
        <Text style={QuizResults.resultText}>Quiz Score:</Text>
        <Text style={QuizResults.resultText}>
          {correctPercentage}
          %
        </Text>
        {correctPercentage !== 100 && (
          <Text>See if you can do better next time</Text>
        )}
      </View>
      <View style={QuizResults.buttonSection}>
        <Pressable onPress={reset} style={[ButtonStyles.inverted, QuizResults.resetButton]}>
          <Text style={ButtonStyles.textInverted}>Restart Quiz</Text>
        </Pressable>
        <Pressable
          onPress={goBack}
          style={ButtonStyles.active}
        >
          <Text style={ButtonStyles.text}>Go To Deck</Text>
        </Pressable>
      </View>
    </View>
  )
}

QuizResultsView.propTypes = {
  answers: PropTypes.array.isRequired,
  reset: PropTypes.func.isRequired,
  goBack: PropTypes.func.isRequired
}

export default QuizResultsView