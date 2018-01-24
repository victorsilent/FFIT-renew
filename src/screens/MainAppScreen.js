import { Navigation } from 'react-native-navigation';

const MainAppScreen = () => {
  return Navigation.startSingleScreenApp({
    screen: {
      screen: 'awesome-ffit.TopAlbumsScreen', // unique ID registered with Navigation.registerScreen
      title: 'Top Albums', // title of the screen as appears in the nav bar (optional)
      navigatorStyle: {}, // override the navigator style for the screen, see "Styling the navigator" below (optional) // override the nav buttons for the screen, see "Adding buttons to the navigator" below (optional)
      navigatorButtons: {
        leftButtons: [
            {
                title: "Menu",
                id: "sideMenu",
            }
          ]
        }
    },
    drawer: {
      // optional, add this if you want a side menu drawer in your app
      left: {
        // optional, define if you want a drawer from the left
        screen: 'awesome-ffit.TestScreen', // unique ID registered with Navigation.registerScreen
        passProps: {}, // simple serializable object that will pass as props to all top screens (optional)
        disableOpenGesture: false, // can the drawer be opened with a swipe instead of button (optional, Android only)
        fixedWidth: 500 // a fixed width you want your left drawer to have (optional)
      }
    }
  });
}

export default MainAppScreen;