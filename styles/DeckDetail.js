import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    view: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    headerSection: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        fontSize: 30,
        fontWeight: '500'
    },
    count: {
        fontSize: 20,
        color: 'grey'
    },
    buttonSection: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        paddingTop: 40,
        paddingBottom: 40
    },
    addCardButton: {
        marginBottom: 10
    }
})
