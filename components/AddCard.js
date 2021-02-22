import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { View, Text, TextInput, Pressable } from 'react-native'

import AddCardStyles from '../styles/AddCardStyles'
import ButtonStyles from '../styles/ButtonStyles'
import InputStyles from '../styles/InputStyles'

import { addCard } from '../redux/actions/decks'

const AddCard = ({deck, dispatch, navigation}) => {
  const existingQuestions = deck.questions.map((que) => que.questionText)

  const [questionText, setQuestionText] = useState('')
  const [questionTextError, setQuestionTextError] = useState('')
  const [answerText, setAnswerText] = useState('')

  const isDisabled = questionText === '' || questionTextError !== '' || answerText === ''

  const handleQuestionChange = (text) => {
    setQuestionText(text)
    if (existingQuestions.includes(text)) {
      setQuestionTextError(`question ${text} already exists for deck ${deck.title}`)
    } else {
      setQuestionTextError('')
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(addCard(deck.title, questionText, answerText))
    setQuestionText('')
    setAnswerText('')
    navigation.goBack()
  }

  return (
    <View style={AddCardStyles.view}>
      <Text style={AddCardStyles.header}>Add Card</Text>
      <View style={AddCardStyles.contentWrapper}>
        <Text style={AddCardStyles.inputLabel}>Question text for your new card:</Text>
        <TextInput
          style={[AddCardStyles.input, InputStyles.default, questionTextError !== '' ? InputStyles.error : {}]}
          onChangeText={handleQuestionChange}
          value={questionText}
        />
        {questionTextError !== '' && (
          <Text style={AddCardStyles.error}>{questionTextError}</Text>
        )}
        <Text style={AddCardStyles.inputLabel}>Answer text for your new card:</Text>
        <TextInput
          style={[AddCardStyles.input, InputStyles.default]}
          onChangeText={text => setAnswerText(text)}
          value={answerText}
        />
        <Pressable
          onPress={handleSubmit}
          disabled={isDisabled}
          style={[isDisabled ? ButtonStyles.disabled : ButtonStyles.active, AddCardStyles.submitButton]}
        >
          <Text style={ButtonStyles.text}>Create Deck</Text>
        </Pressable>
      </View>
    </View>
  )
}

AddCard.propTypes = {
  deck: PropTypes.shape({
    title: PropTypes.string.isRequired,
    questions: PropTypes.array.isRequired
  }).isRequired,
  dispatch: PropTypes.func.isRequired,
  navigation: PropTypes.shape({
    goBack: PropTypes.func.isRequired
  }).isRequired
}

const mapStateToProps = (decks, {route}) => {
  const { params: { deckTitle } } = route
  return {deck: decks[deckTitle]}
}

export default connect(mapStateToProps)(AddCard)