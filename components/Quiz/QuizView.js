import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { View, Text, Pressable } from 'react-native'

import QuizCard from './QuizCard'
import QuizResultsView from './QuizResultsView'

import QuizViewStyles from '../../styles/QuizView'
import ButtonStyles from '../../styles/ButtonStyles'
import { setLocalNotification, clearLocalNotifications } from '../../utils/Notifications'

const QuizView = ({deck, navigation}) => {
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
      clearLocalNotifications()
        .then(setLocalNotification)
    }
  }

  const handleReset = (e) => {
    e.preventDefault()
    setIsComplete(false)
    setCurrentCard(0)
    setAnswers([])
  }

  const handleGoBack = (e) => {
    e.preventDefault()
    navigation.goBack()
  }

  if (isComplete === true) {
    return (
      <QuizResultsView answers={answers} reset={handleReset} goBack={handleGoBack} />
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
        <QuizCard question={deck.questions[currentCard]} />
      </View>
      <View style={QuizViewStyles.answerWrapper}>
        <Pressable
          disabled={deck.questions.length === 0}
          onPress={(e) => handleAnswer(e, true)}
          style={[ButtonStyles.active, QuizViewStyles.answerButton, QuizViewStyles.answerCorrect]}
        >
          <Text style={ButtonStyles.text}>Correct</Text>
        </Pressable>
        <Pressable
          disabled={deck.questions.length === 0}
          onPress={(e) => handleAnswer(e, false)}
          style={[ButtonStyles.active, QuizViewStyles.answerButton, QuizViewStyles.answerIncorrect]}
        >
          <Text style={ButtonStyles.text}>Incorrect</Text>
        </Pressable>
      </View>
    </View>
  )
}

QuizView.propTypes = {
  deck: PropTypes.shape({
    questions: PropTypes.array.isRequired
  }).isRequired,
  navigation: PropTypes.object.isRequired
}

const mapStateToProps = (decks, {route}) => {
  const { params: { deckTitle } } = route
  return {deck: decks[deckTitle]}
}

export default connect(mapStateToProps)(QuizView)
