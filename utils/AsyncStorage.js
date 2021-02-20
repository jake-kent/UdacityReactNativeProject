import AsyncStorage from '@react-native-async-storage/async-storage';

const DECKS_STORAGE_KEY = "ReactNativeMobileFlashcards:decks"

export function updateStorage(state) {
    AsyncStorage.setItem(DECKS_STORAGE_KEY, JSON.stringify(state))
}

export async function getStorage() {
    const rtn = await AsyncStorage.getItem(DECKS_STORAGE_KEY)
    if (rtn === null) {
        await AsyncStorage.setItem(DECKS_STORAGE_KEY, JSON.stringify({}))
        return {}
    } 
    return JSON.parse(rtn)
    
}
