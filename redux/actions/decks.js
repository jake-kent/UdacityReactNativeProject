export const ADD_DECK = 'ADD_DECK'
export const LOAD_DECKS = 'LOAD_DECKS'

export function loadDecks(decks) {
    return {
        type: LOAD_DECKS,
        decks
    }
}

export function addDeck(title) {
    return {
        type: ADD_DECK,
        title
    }
}