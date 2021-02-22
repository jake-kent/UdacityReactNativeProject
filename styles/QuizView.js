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
    }
})
