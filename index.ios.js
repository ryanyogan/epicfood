import React from 'react-native';
import { Provider } from 'react-redux/native';
import App from './src/containers/App';
import configureStore from './src/store/configureStore';

const {
  Component,
  AppRegistry
} = React;

// Redux - Single state stree store
const store = configureStore();

class Albums extends Component {
  render() {
    return (
      <Provider store={store}>
        {() => <App />}
      </Provider>
    );
  }
}

AppRegistry.registerComponent('Albums', () => Albums);
