import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { View, Text } from 'react-native'

import QuizCard from './QuizCard'

import QuizViewStyles from '../../styles/QuizView'

const QuizView = ({deck}) => {
  const [answers, setAnswers] = useState([])
  const [currentCard, setCurrentCard] = useState(0)
  const [isComplete, setIsComplete] = useState(false)

  const handleAnswer = (e, isCorrect) => {
    e.preventDefault()
    setAnswers(answers.concat([isCorrect]))
    if (currentCard < deck.questions.length - 1) {
      setCurrentCard(currentCard + 1)
    } else {
      setIsComplete(true)
    }
  }

  if (isComplete === true) {
    return (
      <View>
        <Text>Score:</Text>
        <Text>80%</Text>
      </View>
    )
  }

  return (
    <View style={QuizViewStyles.view}>
      <Text style={QuizViewStyles.counter}>
        Question 
        {' '}
        {currentCard + 1}
        {' '}
        /
        {' '}
        {deck.questions.length}
      </Text>
      <View style={QuizViewStyles.cardWrapper}>
        <QuizCard question={deck.questions[currentCard]} onAnswer={handleAnswer} />
      </View>
      <View>
        <Text>Correct</Text>
        <Text>Incorrect</Text>
      </View>
    </View>
  )
}

QuizView.propTypes = {
  deck: PropTypes.shape({
    questions: PropTypes.array.isRequired
  }).isRequired
}

const mapStateToProps = (decks, {route}) => {
  const { params: { deckTitle } } = route
  return {deck: decks[deckTitle]}
}

export default connect(mapStateToProps)(QuizView)
