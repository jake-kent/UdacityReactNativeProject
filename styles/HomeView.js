import { StyleSheet } from 'react-native'

import colors from './colors'

export default StyleSheet.create({
    view: {
        flex: 1,
    },
    header: {
        fontSize: 30, textAlign: "center", marginTop: 15, color: colors.mahogany
    },
    deckList: {
        marginTop: 20,
    }
})