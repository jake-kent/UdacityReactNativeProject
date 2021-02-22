import { StyleSheet } from 'react-native'

import colors from './colors'

const styles = {
    default: {
        paddingTop: 6,
        paddingBottom: 6,
        paddingLeft: 12,
        paddingRight: 12,
        backgroundColor: colors.mahogany,
        borderRadius: 6
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
styles.inverted = {
    ...styles.default,
    backgroundColor: 'transparent',
    borderColor: colors.mahogany,
    borderWidth: 1
}
styles.textInverted = {
    ...styles.text,
    color: colors.mahogany   
}

export default StyleSheet.create(styles)