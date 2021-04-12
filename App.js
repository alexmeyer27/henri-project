import 'react-native-gesture-handler';
import React from 'react';

//Application navigation managed in navigation directory
import Routes from './src/navigation/Routes';

//Redux dependancies
import { Provider } from 'react-redux';
import configureStore from './src/redux/configureStore';

const { store } = configureStore()

const App = () => {
  return (
		<Provider store={store}>
      <Routes/>
    </Provider>

  )
}

export default App
