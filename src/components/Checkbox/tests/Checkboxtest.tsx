
import React, { ReactNode } from 'react';
import BR from '@blueeast/bluerain-os';
import Checkbox from '../';


class BlueRainCheckbox extends React.Component<{}, { checked: boolean }> {

  constructor(props: any) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      checked: false,
    };
  }
  handleChange() {
    this.setState({ checked: !this.state.checked });
  }
  render() {
    return (
     <BR.Components.View >
      <Checkbox
        onPress={this.handleChange}
        value={this.state.checked}
      />
      </BR.Components.View>
    );
  }
}
export default BlueRainCheckbox;