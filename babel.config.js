module.exports = function (api) {
  api.cache(true);
  //* react-native-reanimated/plugin MUST always go in last
  return {
    presets: ['babel-preset-expo'],
    plugins: ['react-native-reanimated/plugin'],
  };
};
