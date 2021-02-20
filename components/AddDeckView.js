import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { View, Text, TextInput, Pressable } from 'react-native'

import AddDeckStyles from '../styles/AddDeckView'
import ButtonStyles from '../styles/ButtonStyles'
import InputStyles from '../styles/InputStyles'

import { addDeck } from '../redux/actions/decks'

const AddDeckView = ({decks, dispatch, navigation}) => {
  const [title, setTitle] = useState('')
  const [error, setError] = useState('')
  const handleChange = (text) => {
    setTitle(text)
    if (Object.keys(decks).includes(text)) {
      setError(`deck ${text} already exists`)
    } else {
      setError('')
    }
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(addDeck(title))
    setTitle('')
    navigation.goBack()
  }
  return (
    <View style={AddDeckStyles.view}>
      <Text style={AddDeckStyles.header}>Add Deck</Text>
      <View style={AddDeckStyles.contentWrapper}>
        <Text style={AddDeckStyles.inputLabel}>What is the title of your new deck?</Text>
        <TextInput style={[AddDeckStyles.input, InputStyles.default, error !== '' ? InputStyles.error : {}]} onChangeText={handleChange} value={title} />
        {error !== '' && (
          <Text style={AddDeckStyles.error}>{error}</Text>
        )}
        <Pressable onPress={handleSubmit} disabled={title === '' || error !== ''} style={[title === '' || error !== '' ? ButtonStyles.disabled : ButtonStyles.active, AddDeckStyles.submitButton]}>
          <Text style={ButtonStyles.text}>Create Deck</Text>
        </Pressable>
      </View>
    </View>
  )
}

AddDeckView.propTypes = {
    decks: PropTypes.object.isRequired,
    dispatch: PropTypes.func.isRequired,
    navigation: PropTypes.shape({
      goBack: PropTypes.func.isRequired
    }).isRequired
}

const mapStateToProps = (decks) => ({decks})

export default connect(mapStateToProps)(AddDeckView)