import React, { PropTypes, Component } from 'react';
import DatePicker from 'material-ui/DatePicker';

export default class DatePickerExampleControlled extends Component {
  static propTypes = {
      selectDateForNewSplit: PropTypes.func
  }

  handleChange = (event, date) => {
    this.props.selectDateForNewSplit(date)
  };

  render() {
    return (
      <DatePicker
        hintText="Выбрать дату"
        value={this.props.date}
        onChange={this.handleChange}
      />
    );
  }
}
