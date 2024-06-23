import { AppRegistry } from 'react-native';
import App from './src/app/index.tsx';
import { name as appName } from './app.json';
import('./ReactotronConfig');

AppRegistry.registerComponent(appName, () => App);
