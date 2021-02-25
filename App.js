import React, { useEffect } from "react";
import { Provider } from 'react-redux'

import Root from './components/Root'

import store from './redux/store'
import { setLocalNotification } from './utils/Notifications'

function App() {
  useEffect(() => {
    setLocalNotification()
  }, [])
  return (
    <Provider store={store}>
      <Root />
    </Provider>
  );
}

export default App
