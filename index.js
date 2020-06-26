/**
 * @format
 */
import 'react-native-gesture-handler';
import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import Home from './src/Home';
import AppList from './src/learn-react-listview/AppList';
import FormSubmit from './src/learn-react-components/learnInputSubmit/FormSubmit';
import SideMenu from './src/learn-react-components/learnSideMenu/SideMenu';





AppRegistry.registerComponent(appName, () => SideMenu);
