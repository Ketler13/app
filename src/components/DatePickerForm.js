import React, { PropTypes, Component } from 'react';
import DatePicker from 'material-ui/DatePicker';

export default class DatePickerExampleControlled extends Component {
  constructor(props) {
    super(props);

    this.state = {
      controlledDate: null,
    };
  }

  static propTypes = {
      selectDateForNewSplit: PropTypes.func
  }

  handleChange = (event, date) => {
    this.props.selectDateForNewSplit(date)
    this.setState({
      controlledDate: date,
    });
  };

  render() {
    return (
      <DatePicker
        hintText="Select date"
        value={this.props.date}
        onChange={this.handleChange}
      />
    );
  }
}
