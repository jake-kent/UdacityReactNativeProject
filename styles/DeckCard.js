import { StyleSheet } from 'react-native'

import colors from './colors'

export default StyleSheet.create({
    view: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        borderBottomColor: colors.mahogany,
        borderBottomWidth: 1,
        paddingTop: 20,
        paddingBottom: 20
    },
    first: {
        borderTopColor: colors.mahogany,
        borderTopWidth: 1
    },
    title: {
        fontSize: 20,
        fontWeight: "500"
    },
    count: {
        fontSize: 16,
        color: 'grey'
    }
})
