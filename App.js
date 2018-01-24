import { Navigation } from 'react-native-navigation';
import LoginScreen from './src/screens/Login';
import TestScreen from './src/screens/Test';
import BandListScreen from './src/screens/BandsListScreen';
import TopAlbumsScreen from './src/screens/TopAlbumsScreen';
import ListAlbumsScreen from './src/screens/ListAlbumsScreen';
import BandProfileScreen from './src/screens/BandProfileScreen';
import Player from './src/screens/Player';

//Register Screens
Navigation.registerComponent("awesome-ffit.LoginScreen", () => LoginScreen);
Navigation.registerComponent("awesome-ffit.TestScreen", () => TestScreen);
Navigation.registerComponent("awesome-ffit.BandListScreen", () => BandListScreen);
Navigation.registerComponent("awesome-ffit.TopAlbumsScreen", () => TopAlbumsScreen);
Navigation.registerComponent("awesome-ffit.ListAlbumsScreen", () => ListAlbumsScreen);
Navigation.registerComponent("awesome-ffit.BandProfileScreen", () => BandProfileScreen);
Navigation.registerComponent("awesome-ffit.Player", () => Player);

//Start App
export default () => Navigation.startSingleScreenApp({
  screen: {
    screen: 'awesome-ffit.LoginScreen', // unique ID registered with Navigation.registerScreen
    title: 'Login', // title of the screen as appears in the nav bar (optional)
    navigatorStyle: {}, // override the navigator style for the screen, see "Styling the navigator" below (optional) // override the nav buttons for the screen, see "Adding buttons to the navigator" below (optional)
    navigatorButtons: {},
  }
});