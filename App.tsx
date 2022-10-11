import { Provider } from 'react-redux';
import { StatusBar } from 'expo-status-bar';
import Routes from './screens/routes';
import store from './store';

export default function App() {
  return (
    <Provider store={store}>
      <StatusBar style="auto" />
      <Routes />
    </Provider>
  );
}
