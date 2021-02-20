import { createStore } from 'redux'

import decks from './reducers/decks'

export default createStore(
    decks
)