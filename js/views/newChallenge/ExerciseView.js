import React from 'react';
import {
  Text,
  View,
  TextInput,
  Picker,
} from 'react-native';
import newChallengeStyles from '../../styles/newChallenge/newChallengeStyles';
import mainStyles from '../../styles/main/mainStyles';
import ItemSelectView from './ItemSelectView';

const propTypes = {
  onChallengeUpdate: React.PropTypes.func,
};

const objectiveItemStyle = {
  marginTop: 10,
  labelFontSize: 22,
  iconFontSize: 33,
  iconColor: mainStyles.themeColors.textPrimary,
};

const timePicker = [
  { label: 'Minutes', value: 'minutes' },
  { label: 'Hours', value: 'hours' },
];

const distancePicker = [
  { label: 'km', value: 'km' },
  { label: 'm', value: 'm' },
];

const repetitionPicker = [
  { label: 'Every day', value: 7 },
  { label: '6 times a week', value: 6 },
  { label: '5 times a week', value: 5 },
  { label: '4 times a week', value: 4 },
  { label: '3 times a week', value: 3 },
  { label: 'Twice a week', value: 2 },
  { label: 'Once a week', value: 1 },
  { label: 'Once every 2 weeks', value: 0 },
];

const durationPicker = [
  { label: 'days', value: 'days' },
  { label: 'weeks', value: 'weeks' },
  { label: 'months', value: 'months' },
];

class ExcerciseView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      objective: {},
      objectives: [
        { label: 'Time', style: objectiveItemStyle },
        { label: 'Distance', style: objectiveItemStyle },
      ],
      pickerItems: [],
      repetition: null,
      duration: { value: '2', unit: 'weeks' },
    };
  }

  setObjectiveValue = (value) => {
    const objective = this.state.objective;
    objective.value = value;
    this.setState({ objective });
    this.props.onChallengeUpdate({ objective });
  }

  setObjectiveUnit = (value) => {
    const objective = this.state.objective;
    objective.unit = value;
    this.setState({ objective });
    this.props.onChallengeUpdate({ objective });
  }

  setDurationValue = (value) => {
    const duration = this.state.duration;
    duration.value = value;
    this.setState({ duration });
    this.props.onChallengeUpdate({ duration });
  }

  setDurationUnit = (value) => {
    const duration = this.state.duration;
    duration.unit = value;
    this.setState({ duration });
    this.props.onChallengeUpdate({ duration });
  }

  setRepetition = (value) => {
    this.setState({ repetition: value });
    this.props.onChallengeUpdate({ repetition: value });
  }

  selectObjective = (objectiveLabel) => {
    let pickerItems = [];
    let objective = {};
    const objectives = this.state.objectives;
    switch (objectiveLabel) {
      case 'Time':
        objectives[0].style = { ...objectiveItemStyle, iconColor: mainStyles.themeColors.primary };
        objectives[1].style = { ...objectiveItemStyle, opacity: 0.2 };
        pickerItems = timePicker;
        objective = { type: objectiveLabel, value: '15', unit: 'minutes' };
        break;
      case 'Distance':
        objectives[1].style = { ...objectiveItemStyle, iconColor: mainStyles.themeColors.primary };
        objectives[0].style = { ...objectiveItemStyle, opacity: 0.2 };
        pickerItems = distancePicker;
        objective = { type: objectiveLabel, value: '5', unit: 'km' };
        break;
      default:
        break;
    }
    this.setState({ objective, objectives, pickerItems });
    this.props.onChallengeUpdate({ objective });
  }

  render = () => (
    <View style={newChallengeStyles.mainContainer}>
      <View style={newChallengeStyles.contentContainer}>
        <Text style={newChallengeStyles.titleFont}>Objective</Text>
        {this.state.objectives.map(objective =>
          (<ItemSelectView
            key={objective.label}
            label={objective.label}
            style={objective.style}
            onItemSelect={this.selectObjective}
          />)
        )}
        {this.state.objective.type ?
          <View style={newChallengeStyles.setttingContainer} >
            <View style={newChallengeStyles.settingInputContainer} >
              <TextInput
                style={newChallengeStyles.inputFont}
                keyboardType="numeric"
                maxLength={3}
                onChangeText={this.setObjectiveValue}
                value={this.state.objective.value}
              />
            </View>
            <View style={newChallengeStyles.settingPickerContainer} >
              <Picker
                style={newChallengeStyles.picker}
                selectedValue={this.state.objective.unit}
                onValueChange={this.setObjectiveUnit}
              >
                {this.state.pickerItems.map(pickeritem =>
                  <Picker.Item key={pickeritem.value} label={pickeritem.label} value={pickeritem.value} />
                )}
              </Picker>
            </View>
          </View>
        : null}
        <Text style={newChallengeStyles.titleFont}>Repetition</Text>
        <View style={newChallengeStyles.settingPickerContainer} >
          <Picker
            style={newChallengeStyles.picker}
            selectedValue={this.state.repetition}
            onValueChange={this.setRepetition}
          >
            {repetitionPicker.map(pickeritem =>
              <Picker.Item key={pickeritem.value} label={pickeritem.label} value={pickeritem.value} />
            )}
          </Picker>
        </View>
        <Text style={newChallengeStyles.titleFont}>Duration</Text>
        <View style={newChallengeStyles.setttingContainer} >
          <View style={newChallengeStyles.settingInputContainer} >
            <TextInput
              style={newChallengeStyles.inputFont}
              keyboardType="numeric"
              maxLength={2}
              placeholder="1"
              placeholderTextColor={mainStyles.themeColors.textPrimary}
              onChangeText={this.setDurationValue}
              value={this.state.duration.value}
            />
          </View>
          <View style={newChallengeStyles.settingPickerContainer} >
            <Picker
              style={newChallengeStyles.picker}
              selectedValue={this.state.duration.unit}
              onValueChange={this.setDurationUnit}
            >
              {durationPicker.map(pickeritem =>
                <Picker.Item key={pickeritem.value} label={pickeritem.label} value={pickeritem.value} />
              )}
            </Picker>
          </View>
        </View>
      </View>
    </View>
  );
}

ExcerciseView.propTypes = propTypes;

export default ExcerciseView;
