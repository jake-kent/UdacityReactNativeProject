import { StyleSheet } from 'react-native'

import colors from './colors'

export default StyleSheet.create({
    view: {
        flex: 1
    },
    counter: {
        paddingTop: 10,
        paddingBottom: 10,
        fontSize: 16,
        textAlign: 'center'
    },
    cardWrapper: {
        flex: 1,
        backgroundColor: colors.backgroundMahogany,
        padding: 30
    },
    answerWrapper: {
        alignItems: 'center',
        paddingTop: 20,
        paddingBottom: 20,
    },
    answerButton: {
        marginBottom: 10,
        width: '75%',
        alignItems: 'center',
        paddingTop: 10,
        paddingBottom: 10
    },
    answerCorrect: { 
        backgroundColor: 'green'
    },
    answerIncorrect: { 
        backgroundColor: 'red'
    }
})
