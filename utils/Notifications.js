import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Notifications from 'expo-notifications';
import * as Permissions from 'expo-permissions'
import { Platform } from "react-native";

const NOTIFICATION_KEY = "ReactNativeMobileFlashcards:notifications"

export function clearLocalNotifications() {
  if (Platform.OS !== 'ios' && Platform.OS !== 'android') {
    // eslint-disable-next-line no-unused-vars
    return new Promise((resolve, reject) => resolve(null))
  }
  return AsyncStorage.removeItem(NOTIFICATION_KEY)
    .then(Notifications.cancelAllScheduledNotificationsAsync())
}
export function createNotification() {
  return {
    title: 'Study Your Flashcards!',
    body: "👋 don't forget to study your flashcards for today"
  }
}
export function setLocalNotification() {
  if (Platform.OS !== 'ios' && Platform.OS !== 'android') {
    return
  }
  AsyncStorage.getItem(NOTIFICATION_KEY)
    .then(JSON.parse)
    .then((data) => {
      if (data === null) {
        Permissions.askAsync(Permissions.NOTIFICATIONS)
          .then(({status}) => {
            if (status === 'granted') {
              const tomorrow = new Date()
              tomorrow.setDate(tomorrow.getDate() + 1)
              tomorrow.setHours(20)
              tomorrow.setMinutes(0)
              Notifications.scheduleNotificationAsync({
                content: createNotification(),
                trigger: {
                  hour: 20,
                  minute: 0,
                  repeats: true
                }
              })
              AsyncStorage.setItem(NOTIFICATION_KEY, JSON.stringify(true))
            }
          })
      }
    })
}
