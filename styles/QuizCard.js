import { StyleSheet } from 'react-native'

import colors from './colors'

export default StyleSheet.create({
    view: {
        flex: 1
    },
    innerView: {
        flex: 1,
        padding: 20,
        borderRadius: 6,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontSize: 40,
        textAlign: 'center'
    },
    tapText: {
        marginTop: 20,
        color: colors.mahogany
    }
})
