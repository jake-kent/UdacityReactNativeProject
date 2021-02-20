import { StyleSheet } from 'react-native'

import colors from './colors'

export default StyleSheet.create({
    view: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        paddingLeft: 5,
        paddingRight: 5,

    },
    header: {
        fontSize: 30, textAlign: "center", marginTop: 15, color: colors.mahogany
    },
    contentWrapper: {
        flex: 1,
        width: '100%',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    inputLabel: {
        fontSize: 16, textAlign: "center", marginTop: 40
    },
    input: {
        width: '75%',
        marginTop: 20
    },
    error: {
        color: 'red'
    },
    submitButton: {
        marginTop: 20
    }
})
