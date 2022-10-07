import React from 'react';
import { Platform, Text } from 'react-native';
import Lottie from 'lottie-react-native';
import animation from '../../assets/lottie/piggy.json';

export default function LottieCustom() {
  return (
    <>
      {Platform.OS === 'web' ? (
        <Text>Not supported.</Text>
      ) : (
        <Lottie source={animation} autoPlay />
      )}
    </>
  );
}
