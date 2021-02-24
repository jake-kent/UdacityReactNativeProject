import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    resultView: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    resultsWrapper: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    resultText: {
        fontSize: 40
    },
    buttonSection: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        paddingTop: 40,
        paddingBottom: 40
    },
    resetButton: {
        marginBottom: 10
    }
})