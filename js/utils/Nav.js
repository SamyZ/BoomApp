import React from 'react';
import {
   Navigator,
   DrawerLayoutAndroid,
 } from 'react-native';
import LoginView from '../views/login/LoginView';
import HomeView from '../views/home/HomeView';
import NavView from '../views/nav/NavView';

class Navigation extends React.Component {
  renderScene = (route, navigator) => {
    let renderedView = ({});
    switch (route.name) {
      default:
      case 'Login':
        return <LoginView navigator={navigator} />;
      case 'Home':
        renderedView = <HomeView navigator={navigator} />;
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
        initialRoute={{ name: 'Home', index: 0 }}
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
