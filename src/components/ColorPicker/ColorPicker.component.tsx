import { BlueRain, BlueRainConsumer } from '@blueeast/bluerain-os';
import { ChromePicker, SketchPicker } from 'react-color';
import { ColorPickerProperties } from '@blueeast/bluerain-ui-interfaces';
import { styles } from './pickerStyles';
import React from 'react';


class ColorControl extends React.Component<ColorPickerProperties, {}> {
	state = {
		displayColorPicker: false,
		color: this.props.value,
	};
	getColorPicker(hs:boolean, backgroundColor:string) {
		if (hs) {
			return <ChromePicker color={backgroundColor} onChange={this.handleChangeHsl} onChangeComplete={this.props.onChange} />;
		}
		return <SketchPicker color={backgroundColor} onChange={this.handleChangeRgb} onChangeComplete={this.props.onChange} />;
	}

	handleClick = () => {
		this.setState({ displayColorPicker: !this.state.displayColorPicker });
	}

	handleClose = () => {
		this.setState({ displayColorPicker: false });
	}

	handleChangeHsl = (color) => {
		this.setState({ color: color.hsl });
	}

	handleChangeRgb= (color) => {
		this.setState({ color: color.rgb });
	}

	render() {

		let backgroundColor = 'blue';
		if (this.props.hs) {
			backgroundColor = 'hsl(20, 100%, 50%)';
			if (this.state.color) {
				if (typeof this.state.color === 'string') {
					backgroundColor = this.state.color;
				} else {
					if (!(this.state.color.h)) {
						return (
            <BlueRainConsumer>{(BR:BlueRain) => (
            <BR.Components.Card zDepth={2} style={styles.handleError}>
  <BR.Components.Text>{'"Error: Pass prop "value" in hsl format as prop "hs" is true, demanding hsl values."'}</BR.Components.Text>
						</BR.Components.Card>)}
            </BlueRainConsumer>);
					}
					backgroundColor = `hsl(${this.state.color.h}, ${this.state.color.s * 100}%, ${this.state.color.l * 100}%)`;
				}
			}
		} else if (this.state.color) {
			if (typeof this.state.color === 'string') {
				backgroundColor = this.state.color;
			} else {
				backgroundColor = `rgba(${this.state.color.r}, ${this.state.color.g}, ${this.state.color.b}, ${this.state.color.a})`;
			}
		}

		return (
      <BlueRainConsumer>{(BR:BlueRain) => (
  <BR.Components.View style={styles.colorControl}>
    <BR.Components.Text>{this.props.label}</BR.Components.Text>
    <BR.Components.View style={styles.onLeft}>
      <BR.Components.Card zDepth={2} style={styles.padding5}>
        <BR.Components.Button
          style={{ display:'flex', justifyContent:'center', backgroundColor, minWidth:'36px' }}
          buttonStyle={{ backgroundColor, height:14, width:36 }}
          overlayStyle={styles.buttonOverlay}
          labelStyle={styles.displayNone}
          onClick={this.handleClick}
        />
        { this.state.displayColorPicker ? <BR.Components.Card zDepth={2} style={styles.popover}>
          <BR.Components.View style={styles.cover} onPress={this.handleClose} />
          {this.getColorPicker(this.props.hs, backgroundColor)}
        </BR.Components.Card> : null }
      </BR.Components.Card>
    </BR.Components.View>
  </BR.Components.View>)}
  </BlueRainConsumer>
		);

	}
}

ColorControl.defaultProps = defaultProps;

export default withBlueRain(withStateful(ColorControl, {
	checkData: (props, dataProp) => {
		const {
			label,
			onChange,
			value,
			hs,
			} = props;
		if (label && typeof label !== 'string') {
			return false;
		} else if (onChange && typeof onChange !== 'function') {
			return false;
		} else if (value && typeof value !== 'object') {
			if (typeof value !== 'string') {
				return false;
			}
		} else if (hs && typeof hs !== 'boolean') {
			return false;
		}
		return true;
	},
}));
