# React Native Mobile Flashcards

- Tested on:
    - iPhone 11 Pro Simulator (iOS 14.1)
    - Android: Pixel 4 (API 28, Android 9.0)
    - Web: Google Chrome Version 88.0.4324.192

## Description
This app allows users to create decks of flashcards to quiz themselves against
- Users can create decks
- Users can select from a list of decks on the home view to view details about the decks
- Users can add cards to each of their decks
- Users can quiz themselves against any of their decks
- Within quizes users can:
  - Submit correct/incorrect for each card in the quiz
  - See results of their quiz after completion
  - Reset to the start of the quiz
  - Return to the deck view
- Users receive a notification at 8pm every day if they haven't completed at least one quiz that day

## 🚀 How to run

- Ensure that expo and iOS and Android simulators have been installed and configured
- Install packages with `yarn install`
- Run `yarn start` to start the bundler.
- To run on specific devices:
  - iOS: Ensure the iOS simulator is running and type `i` from within the running yarn start
  - Android: Ensure the Android simulator is running and type `a` from within the running yarn start
  - Web: type `w` and a new tab will open in your browser

## n.b.
- Working code for notifications has been copied from the course lessons/project and the latest expo docs. However, to my knowledge, there is no way to fully test the notifications within the simulators
- opening the app on the web results in the following warning `Compiled with warnings.
/Users/kentjakel/Udacity/React/ReactNativeMobileFlashcards/node_modules/@react-navigation/bottom-tabs/lib/module/views/ResourceSavingScene.js
Attempted import error: 'shouldUseActivityState' is not exported from 'react-native-screens'.`, which seems to be an unresolved issue in the react-navigation GitHub repo
