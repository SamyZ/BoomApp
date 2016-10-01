import React from 'react';
import {
  Text,
  View,
} from 'react-native';
import { Set } from 'immutable';
import homeStyles from '../../styles/home/homeStyles';
import { challengesRef } from '../../actions/challengesActions';
import ChallengeView from './ChallengeView';

class HomeView extends React.Component {
  constructor(props) {
    super(props);
    this.state = { challenges: new Set() };
  }

  componentWillMount = () => {
    challengesRef.on('child_added', (snapshot /* , prevChildKey */) => {
      const newChallenge = snapshot.val();
      newChallenge.id = snapshot.key();
      let challenges = this.state.challenges;
      challenges = challenges.add(newChallenge);
      this.setState({ challenges });
    });
  }

  componentWillUnmount = () => {
    challengesRef.off();
  }

  render() {
    console.log(this.state.challenges);

    return (
      <View style={homeStyles.mainContainer}>
        {this.state.challenges.map(challenge => <ChallengeView key={challenge.id} challenge={challenge} />)}
      </View>
    );
  }
}

export default HomeView;
