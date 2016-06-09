import React from 'react';
import {
   Navigator,
   DrawerLayoutAndroid,
 } from 'react-native';

import NavView from '../views/nav/NavView';
import HomeView from '../views/home/HomeView';
import LoginContainer from '../containers/LoginContainer';
import NewChallengeContainer from '../containers/NewChallengeContainer';

class Navigation extends React.Component {
  renderScene = (route, navigator) => {
    let renderedView = ({});
    switch (route.name) {
      default:
      case 'login':
        return <LoginContainer navigator={navigator} />;
      case 'home':
        renderedView = <HomeView navigator={navigator} />;
        break;
      case 'newChallenge':
        renderedView = <NewChallengeContainer navigator={navigator} />;
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
        initialRoute={{ name: 'newChallenge', index: 0 }}
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
