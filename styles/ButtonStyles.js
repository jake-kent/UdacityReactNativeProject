import { StyleSheet } from 'react-native'

import colors from './colors'

const styles = {
    default: {
        paddingTop: 6,
        paddingBottom: 6,
        paddingLeft: 12,
        paddingRight: 12,
        backgroundColor: colors.mahogany
    },
    text: {
        color: 'white',
        fontSize: 18,
    }
}
styles.active = {
    ...styles.default
}
styles.disabled = {
    ...styles.default,
    opacity: 0.4
}

export default StyleSheet.create(styles)