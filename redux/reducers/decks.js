import { ADD_DECK, LOAD_DECKS, ADD_CARD } from '../actions/decks'

import { updateStorage } from '../../utils/AsyncStorage'

function decks (state = {}, action) {
    if (action.type === LOAD_DECKS) {
        return action.decks
    }
    if (action.type === ADD_DECK) {
        const newState = {
            ...state,
            [action.title]: {
                title: action.title,
                questions: []
            }
        }
        updateStorage(newState)
        return newState
    }
    if (action.type === ADD_CARD) {
        const newState = {
            ...state,
            [action.deckTitle]: {
                ...state[action.deckTitle],
                questions: state[action.deckTitle].questions.concat([
                    {questionText: action.questionText, answerText: action.answerText}
                ])
            }
        }
        updateStorage(newState)
        return newState
    }
    return state
}

export default decks