import { Provider } from 'react-redux';
import { StatusBar } from 'expo-status-bar';
import statusbar from './config/statusbar';
import Root from './views/Main';
import store from './store';

export default function App() {
  const statusBarMode = statusbar.mode;
  return (
    <Provider store={store}>
      <StatusBar style={statusBarMode} />
      <Root />
    </Provider>
  );
}
