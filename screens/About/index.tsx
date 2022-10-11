import { Text, View, TouchableOpacity } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../routes';

export default function About({
  navigation,
}: NativeStackScreenProps<RootStackParamList>) {
  return (
    <View>
      <Text>About</Text>

      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <Text>Navigate Home</Text>
      </TouchableOpacity>
    </View>
  );
}
