import React from 'react';
import { Platform, Text, View } from 'react-native';
import Lottie from 'lottie-react-native';
import animation from '../../assets/lottie/piggy.json';

export default function LottieCustom() {
  return (
    <View>
      {Platform.OS === 'web' ? (
        <Text>Not supported.</Text>
      ) : (
        <Lottie source={animation} autoPlay loop />
      )}
      <Lottie
        source={require('../../assets/lottie/piggy.json')}
        autoPlay
        loop
      />
    </View>
  );
}
