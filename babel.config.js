module.exports = function (api) {
  api.cache(true);

  return {
    presets: ['module:@react-native/babel-preset'],
    plugins: [
      [
        require.resolve('babel-plugin-module-resolver'),
        {
          alias: {
            '@src': './src/',
            '@api': './src/api/',
            '@app': './src/app/',
            '@assets': './src/app/assets/',
            '@helpers': './src/helpers/',
            '@screens': './src/screens/',
            '@navigation': './src/navigation/',
            '@components': './src/app/components/index',
            '@store': './src/app/store/',
            '@hooks': './src/app/hooks/',
            '@icons': './src/app/assets/icons/',
            '@util': './src/app/util/',
            '@constantshaqqex': './src/constants/',
            '@styleshaqqex': './src/styles/',
          },
          extensions: ['.js', '.ts', '.tsx'],
        },
      ],
      ['macros'],
      ['react-native-reanimated/plugin'],
    ],
  };
};
