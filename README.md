# React Native Mobile Flashcards

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
  - Web: type 'w' and a new tab will open in your browser

## n.b.
Working code for notifications has been copied from the course lessons/project. However, there is no way to test the notifications witin the simulators/web browser
