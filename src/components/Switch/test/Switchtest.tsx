import * as React from 'react';
import Switch from '../Switch.component';
// import console = require('console');

/**
 * The universal props of Avatar Component
 * @param {boolean} props.disabled if true, switch is rendered in disabled form.
 * @param {boolean} props.value value of the switch.
 * @param {function} props.onValueChange Invoked with the new value when the value changes.
 * @param {Object} props.style Style object for switch component.
 *  The specific libraray props of Badge Component
 * @param {string or boolean} props.checked Keeps the value unchanged.
 * @param {Object} props.classes the children on which the switch will append styles.
 * @param {Object} props.onChange  Invoked with the new value when the value changes.
 */


class BlueRainSwitch extends React.Component<{ muValue: string }, { value: boolean }> {
  constructor(props: any) {
    super(props);
    this.state = {
      value: false
    };
    this.onChange = this.onChange.bind(this);
  }
  onChange() {
    this.setState({
      value: this.state.value
    });
  }
  render() {
    return (
      <Switch
        value={this.state.value}
        onValueChange={this.onChange}
      />
    );
  }
}

export default BlueRainSwitch;