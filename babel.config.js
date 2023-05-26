module.exports = function(api) {
  api.cache(true);
  return {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      
      {
      root: ['./src'],
      alias: {
        '@assets': './src/assets',
        '@components': './src/components',
        '@screens': './src/screens',
        '@utils': './src/utils',
        '@services': './src/services',
        '@contexts': './src/contexts',
        '@routes': './src/routes'
        }
      }
    ],
    ],
  }
};
