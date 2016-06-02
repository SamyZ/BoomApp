import React from 'react';
import {
   Navigator,
   DrawerLayoutAndroid,
 } from 'react-native';

import NavView from '../views/nav/NavView';
import LoginView from '../views/login/LoginView';
import HomeView from '../views/home/HomeView';
import SportView from '../views/newChallenge/SportView';

class Navigation extends React.Component {
  renderScene = (route, navigator) => {
    let renderedView = ({});
    switch (route.name) {
      default:
      case 'login':
        return <LoginView navigator={navigator} />;
      case 'home':
        renderedView = <HomeView navigator={navigator} />;
        break;
      case 'newChallenge':
        renderedView = <SportView navigator={navigator} />;
        break;
    }
    return (
      <DrawerLayoutAndroid
        drawerWidth={300}
        drawerPosition={DrawerLayoutAndroid.positions.Left}
        renderNavigationView={() => <NavView navigator={navigator} />}
      >
        {renderedView}
      </DrawerLayoutAndroid>
    );
  }

  render() {
    return (
      <Navigator
        initialRoute={{ name: 'home', index: 0 }}
        renderScene={this.renderScene}
        configureScene={() => ({ ...Navigator.SceneConfigs.PushFromRight, gestures: {} })}
      />
    );
  }
}

export default Navigation;

export function navigate(navigator, routeName) {
  navigator.push({ name: routeName }); // Has to match route.name
}
