import { Text, View, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import {
  clearState,
  decrement,
  increment,
} from '../../store/slices/userSession';
import LottieCustom from '../../components/LottieCustom';
import styles from './styles';

type State = {
  userSession: {
    count: string;
  };
};

export default function App() {
  const dispatch = useDispatch();
  const userSession = useSelector((state: State) => state.userSession);

  function sendIncrement() {
    dispatch(increment());
  }

  function sendDecrement() {
    dispatch(decrement());
  }

  function resetCounter() {
    dispatch(clearState());
  }

  return (
    <View style={styles.container}>
      <Text>This is where everything starts</Text>
      <Text>
        Counter:
        {userSession.count}
      </Text>
      <TouchableOpacity onPress={() => sendIncrement()}>
        <Text>Add [ + ]</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => sendDecrement()}>
        <Text>Remove [ - ]</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => resetCounter()}>
        <Text>Reset counter</Text>
      </TouchableOpacity>
      <LottieCustom />
    </View>
  );
}
