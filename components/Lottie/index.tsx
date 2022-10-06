import React from 'react';
import { Platform } from 'react-native';
import Lottie from 'lottie-react-native';
import animation from '../../assets/lottie/piggy.json';

export default function Animation() {
  Platform.OS !== 'web' && <Lottie source={animation} autoPlay loop />;
}
