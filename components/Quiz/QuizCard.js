import React, { useState, useEffect, useRef } from 'react'
import PropTypes from 'prop-types'

import { Text, Pressable, Animated } from 'react-native'

import QuizCardStyles from '../../styles/QuizCard'

const QuizCard = ({question}) => {
  const [isAnswerSide, setIsAnswerSide] = useState(false)
  const opacity = useRef(new Animated.Value(1)).current

  useEffect(() => {
    setIsAnswerSide(false)
  }, [question])

  const handleFlip = (e) => {
    e.preventDefault()
    Animated.sequence([
      Animated.timing(opacity, {toValue: 0, duration: 500, useNativeDriver: true}),
      Animated.timing(opacity, {toValue: 1, duration: 500, useNativeDriver: true})
    ]).start()
    setTimeout(() => setIsAnswerSide(!isAnswerSide), 500)
    
  }
  return (
    <Animated.View style={[QuizCardStyles.view, {opacity}]}>
      <Pressable onPress={handleFlip} style={QuizCardStyles.innerView}>
        <Text style={QuizCardStyles.text}>{isAnswerSide ? question.answerText : question.questionText}</Text>
      </Pressable>
    </Animated.View>
  )
}

QuizCard.propTypes = {
    question: PropTypes.shape({
        questionText: PropTypes.string.isRequired,
        answerText: PropTypes.string.isRequired
    }).isRequired,
}

export default QuizCard