import React from 'react';
import {
  Text,
  View,
  TextInput,
} from 'react-native';
import newChallengeStyles from '../../styles/newChallenge/newChallengeStyles';
import mainStyles from '../../styles/main/mainStyles';
import ItemSelectView from './ItemSelectView';

const propTypes = {
  onChallengeUpdate: React.PropTypes.func,
};

const challengeItemStyle = {
  marginTop: 10,
  labelFontSize: 33,
  iconFontSize: 44,
  iconColor: mainStyles.themeColors.textPrimary,
};

const sportItemStyle = {
  marginTop: 10,
  labelFontSize: 16,
  iconFontSize: 20,
  iconColor: mainStyles.themeColors.textPrimary,
};

const enduranceSports = [
  { label: 'Running', style: sportItemStyle },
  { label: 'Cycling', style: sportItemStyle },
  { label: 'Swimming', style: sportItemStyle },
  { label: 'Hiking', style: sportItemStyle },
  { label: 'Walking', style: sportItemStyle },
  { label: 'Treadmill', style: sportItemStyle },
  { label: 'Skipping rope', style: sportItemStyle },
];

const strengthSports = [
  { label: 'Push-ups', style: sportItemStyle },
  { label: 'Abs', style: sportItemStyle },
  { label: 'Weightlifting', style: sportItemStyle },
  { label: 'Custom training', style: sportItemStyle },
];

class SportView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      challenge: null,
      challenges: [
        { label: 'Endurance', style: challengeItemStyle },
        { label: 'Strength', style: challengeItemStyle },
      ],
      sports: [],
      customSport: '',
    };
  }

  setCustomSport = (customSport) => {
    this.setState({ customSport });
    this.props.onChallengeUpdate({ sport: customSport });
  }

  selectChallenge = (challengeLabel) => {
    let sports = [];
    const challenges = this.state.challenges;
    switch (challengeLabel) {
      case 'Endurance':
        sports = enduranceSports;
        strengthSports.forEach(sport => sport.style = sportItemStyle);
        challenges[0].style = { ...challengeItemStyle, iconColor: mainStyles.themeColors.primary };
        challenges[1].style = { ...challengeItemStyle, opacity: 0.2 };
        break;
      case 'Strength':
        sports = strengthSports;
        enduranceSports.forEach(sport => sport.style = sportItemStyle);
        challenges[1].style = { ...challengeItemStyle, iconColor: mainStyles.themeColors.primary };
        challenges[0].style = { ...challengeItemStyle, opacity: 0.2 };
        break;
      default:
        break;
    }
    this.setState({ challenge: challengeLabel, challenges, sports });
    this.props.onChallengeUpdate({ challenge: challengeLabel, sport: null });
  }

  selectSport = (sportLabel) => {
    const sports = this.state.sports;
    sports.forEach(sport => {
      if (sportLabel === sport.label) {
        sport.style = { ...sportItemStyle, iconColor: mainStyles.themeColors.primary };
      } else {
        sport.style = { ...sportItemStyle, opacity: 0.2 };
      }
    });
    this.setState({ sports, sport: sportLabel });
    this.props.onChallengeUpdate({ challenge: this.state.challenge, sport: sportLabel });
  }

  render = () => (
    <View style={newChallengeStyles.mainContainer}>
      <View style={newChallengeStyles.contentContainer}>
        <Text style={newChallengeStyles.titleFont}>Challenge</Text>
        <View style={newChallengeStyles.itemsContainer} >
          {this.state.challenges.map(challenge =>
            (<ItemSelectView
              key={challenge.label}
              label={challenge.label}
              style={challenge.style}
              onItemSelect={this.selectChallenge}
             />)
          )}
        </View>
        {this.state.challenge ?
          <View>
            <Text style={newChallengeStyles.titleFont}>Sport</Text>
            <View style={newChallengeStyles.itemsContainer} >
              {this.state.sports.map(sport =>
                (<ItemSelectView
                  key={sport.label}
                  label={sport.label}
                  style={sport.style}
                  onItemSelect={this.selectSport}
                />)
              )}
            </View>
            {this.state.sport === 'Custom training' ?
              <View style={newChallengeStyles.settingInputContainer} >
                <TextInput
                  style={newChallengeStyles.inputFont}
                  multiline
                  placeholder={`30s crunch\n30s plank`}
                  placeholderTextColor={mainStyles.themeColors.textPrimary}
                  onChangeText={this.setCustomSport}
                  value={this.state.customSport}
                />
              </View>
            : null}
          </View>
        : null}
      </View>
    </View>
  );
}

SportView.propTypes = propTypes;

export default SportView;
