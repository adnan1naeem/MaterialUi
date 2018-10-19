import React from 'react';
import { Dropdown, DropdownItem } from '../index';
const style = { root: { padding: 20 }, dropdown: { width: 400 } };



class SimpleSelect extends React.Component<any, any> {

  constructor(props: any) {

    super(props);
    this.state = {
      value: props.multiple ? ['1'] : '1'
    };
    this.onChange = this.onChange.bind(this);
  }

  onChange(event: any) {
    console.log(event.target.value);
    this.setState({ value: event.target.value });
  }



  render() {

    return (<Dropdown  {...this.props} onValueChange={this.onChange} value={this.state.value} autoWidth={true} style={style.dropdown}>
      <DropdownItem value="1"  >Item 1 </DropdownItem>
      <DropdownItem value="2">Item 2 </DropdownItem>
      <DropdownItem value="3">Item 3 </DropdownItem>
      <DropdownItem value="4">Item 4 </DropdownItem>
      <DropdownItem value="5">Item 5 </DropdownItem>
    </Dropdown>);
  }
}
export default SimpleSelect;