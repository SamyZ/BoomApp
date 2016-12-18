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

const prizeItemStyle = {
  marginTop: 10,
  labelFontSize: 22,
  iconFontSize: 30,
  iconColor: mainStyles.themeColors.textPrimary,
};

class PrizeView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      prize: null,
      customPrize: '',
      prizes: [
        { label: 'Diner', style: prizeItemStyle },
        { label: 'Drinks', style: prizeItemStyle },
        { label: 'Gift', style: prizeItemStyle },
        { label: 'Define your own', style: prizeItemStyle },
      ],
    };
  }

  setCustomPrize = (customPrize) => {
    this.setState({ customPrize });
    this.props.onChallengeUpdate({ prize: customPrize });
  }

  selectPrize = (prizeLabel) => {
    const prizes = this.state.prizes;
    prizes.forEach(prize => {
      if (prizeLabel === prize.label) {
        prize.style = { ...prizeItemStyle, iconColor: mainStyles.themeColors.primary };
      } else {
        prize.style = { ...prizeItemStyle, opacity: 0.2 };
      }
    });
    this.setState({ prize: prizeLabel, prizes });
    this.props.onChallengeUpdate({ prize: prizeLabel });
  }

  render = () => (
    <View style={newChallengeStyles.mainContainer}>
      <View style={newChallengeStyles.contentContainer}>
        <Text style={newChallengeStyles.titleFont}>Prize (optional)</Text>
        <View style={newChallengeStyles.itemsContainer} >
          {this.state.prizes.map(prize =>
            (<ItemSelectView
              key={prize.label}
              label={prize.label}
              style={prize.style}
              onItemSelect={this.selectPrize}
            />)
          )}
        </View>
        {this.state.prize === 'Define your own' ?
          <View style={newChallengeStyles.settingInputContainer} >
            <TextInput
              style={newChallengeStyles.inputFont}
              placeholder="Birthday cake for Paul"
              placeholderTextColor={mainStyles.themeColors.textPrimary}
              onChangeText={this.setCustomPrize}
              value={this.state.customPrize}
            />
          </View>
        : null}
      </View>
    </View>
  );
}

PrizeView.propTypes = propTypes;

export default PrizeView;
