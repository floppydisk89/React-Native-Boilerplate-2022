import React from 'react';
import Lottie from 'lottie-react-native';
import animation from '../../assets/lottie/piggy.json';

export default function Animation() {
  return <Lottie source={animation} autoPlay loop />;
}
