import { Text, View, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../routes';
import {
  clearState,
  decrement,
  increment,
} from '../../store/slices/userSession';
import LottieCustom from '../../components/LottieCustom';
import { useLocale } from '../../plugins/localizer';

import styles from './styles';

type State = {
  userSession: {
    count: string;
  };
};

export default function Home({
  navigation,
}: NativeStackScreenProps<RootStackParamList>) {
  const dispatch = useDispatch();
  const t = useLocale();
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
      <Text>{t('hello')} This is where everything starts</Text>
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

      <TouchableOpacity onPress={() => navigation.navigate('About')}>
        <Text>Navigate About</Text>
      </TouchableOpacity>
    </View>
  );
}
