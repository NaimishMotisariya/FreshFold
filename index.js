/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import Home from './src/Home/Home';
import Navigationscreens from './src/App';
import Order from './src/Home/Order';

AppRegistry.registerComponent(appName, () => Navigationscreens);
