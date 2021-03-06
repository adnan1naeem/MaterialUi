import { BlueRain, BlueRainConsumer } from '@blueeast/bluerain-os';
import { ChromePicker, SketchPicker } from 'react-color';
import { ColorPickerProperties } from '@blueeast/bluerain-ui-interfaces';
import { styles } from './pickerStyles';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import React from 'react';

export interface MUIProps extends ColorPickerProperties {
	value?: { h?: number, s?: number, l?: number, r?: number, g?: number, b?: number, a?: number } | string | any,
	hs: boolean,
}

class ColorPicker extends React.Component<MUIProps, { color?: { h?: number, s?: number, l?: number, r?: number, g?: number, b?: number, a?: number } | string, displayColorPicker: boolean }> {

	constructor(props: MUIProps) {
		super(props);
		this.state = {
			displayColorPicker: false,
			color: this.props.value || 'red',
		};
	}

	handleClick = () => {
		this.setState({ displayColorPicker: !this.state.displayColorPicker });
	}

	handleClose = () => {
		this.setState({ displayColorPicker: false });
	}

	handleChangeHsl = (color: any) => {
		this.setState({ color: color.hsl });
	}

	handleChangeRgb = (color: any) => {
		this.setState({ color: color.rgb });
	}

	getColorPicker(hs: boolean, backgroundColor: string) {
		if (hs) {
			return <ChromePicker color={backgroundColor} onChange={this.handleChangeHsl} onChangeComplete={this.props.onChange} />;
		}
		return <SketchPicker color={backgroundColor} onChange={this.handleChangeRgb} onChangeComplete={this.props.onChange} />;
	}

	render() {

		let backgroundColor = 'blue';
		if (this.props.hs) {
			backgroundColor = 'hsl(20, 100%, 50%)';
			if (this.state.color) {
				if (typeof this.state.color === 'string') {
					backgroundColor = this.state.color;
				}
				else {
					if (!(this.state.color.h)) {
						return (
							<BlueRainConsumer>{(BR: BlueRain) => (
								<Paper elevation={2}>
									<BR.Components.Text style={styles.handleError}>{'"Error: Pass prop "value" in hsl format as prop "hs" is true, demanding hsl values."'}</BR.Components.Text>
								</Paper>)}
							</BlueRainConsumer>);
					}
					const bgS = (this.state.color.s || 0.5) * 100;
					const bgL = (this.state.color.l || 0.5) * 100;
					backgroundColor = `hsl(${this.state.color.h}, ${bgS}%, ${bgL}%)`;
				}
			}
		} else if (this.state.color) {
			backgroundColor = typeof this.state.color === 'string' ? this.state.color : `rgba(${this.state.color.r}, ${this.state.color.g}, ${this.state.color.b}, ${this.state.color.a})`;
		}

		return (
			<BlueRainConsumer>{(BR: BlueRain) => (
				<BR.Components.View style={styles.colorControl}>
					<BR.Components.Text>{this.props.label}</BR.Components.Text>
					<BR.Components.View style={styles.onLeft}>
						<Paper elevation={2} style={styles.padding5}>
							<Button
								// raised={true}
								style={{ display: 'flex', justifyContent: 'center', backgroundColor, minHeight: 14, minWidth: 36 }}
								onClick={this.handleClick}
							/>
							{this.state.displayColorPicker ? <Paper elevation={2}>
								<BR.Components.View style={styles.popover}>
									<BR.Components.View style={styles.cover} />
									{this.getColorPicker(this.props.hs, backgroundColor)}
								</BR.Components.View>
							</Paper> : null}
						</Paper>
					</BR.Components.View>
				</BR.Components.View>
			)}
			</BlueRainConsumer>
		);

	}
}

export { ColorPicker };