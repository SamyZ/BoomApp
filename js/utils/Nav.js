import React from 'react';
import {
   Navigator,
   DrawerLayoutAndroid,
 } from 'react-native';
import NavView from '../views/nav/NavView';
import HomeView from '../views/home/HomeView';
import LoginContainer from '../containers/LoginContainer';
import NewChallengeContainer from '../containers/NewChallengeContainer';

export function navigate(navigator, routeName) {
  navigator.push({ name: routeName }); // Memory leak :( - Will probably have to move to another navigation module
}

const routeStack = [
  { name: 'login' },
  { name: 'home' },
  { name: 'newChallenge' },
];

class Navigation extends React.Component {
  configureScene = () => ({ ...Navigator.SceneConfigs.PushFromRight, gestures: {} })

  navigateToRoute = (navigator, routeName) => {
    navigate(navigator, routeName);
    this.drawer.closeDrawer();
  }

  renderScene = (route, navigator) => {
    let renderedView = ({});
    switch (route.name) {
      case 'login':
        return <LoginContainer navigator={navigator} />;
      default:
      case 'home':
        renderedView = <HomeView navigator={navigator} />;
        break;
      case 'newChallenge':
        renderedView = <NewChallengeContainer navigator={navigator} />;
    }
    return (
      <DrawerLayoutAndroid
        ref={(drawer) => { this.drawer = drawer; }}
        drawerWidth={300}
        drawerPosition={DrawerLayoutAndroid.positions.Left}
        renderNavigationView={() => <NavView navigateToRoute={(routeName) => this.navigateToRoute(navigator, routeName)} />}
      >
        {renderedView}
      </DrawerLayoutAndroid>
    );
  }

  render = () => (
    <Navigator
      initialRoute={routeStack[2]}
      renderScene={this.renderScene}
      configureScene={this.configureScene}
    />
  );
}

export default Navigation;
