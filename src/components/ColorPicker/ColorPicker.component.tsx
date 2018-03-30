import { BlueRain, BlueRainConsumer } from '@blueeast/bluerain-os';
import { ChromePicker, SketchPicker } from 'react-color';
import { ColorPickerProperties } from '@blueeast/bluerain-ui-interfaces';
import { styles } from './pickerStyles';
import Button from 'material-ui/Button';
import Card from 'material-ui/Card';
import Paper from 'material-ui/Paper';
import React from 'react';

export interface MUIProps extends ColorPickerProperties {
	value?:{ h?: number, s?: number, l?: number, r?: number, g?: number, b?: number, a?: number } | string,
	hs: boolean,
}

class ColorPicker extends React.Component<MUIProps, {color?:{h?: number, s?: number, l?: number, r?: number, g?: number, b?: number, a?: number } | string, displayColorPicker: boolean}> {

	constructor (props:MUIProps) {
		super(props);
		// this.handleClick = this.handleClick.bind(this);
		// this.handleClose = this.handleClose.bind(this);
		// this.handleChangeHsl = this.handleChangeHsl.bind(this);
		// this.handleChangeRgb = this.handleChangeRgb.bind(this);
		this.state= {
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

	handleChangeHsl = (color) => {
		this.setState({ color: color.hsl });
	}

	handleChangeRgb= (color) => {
		this.setState({ color: color.rgb });
	}

	getColorPicker(hs:boolean, backgroundColor:string) {
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
						<BlueRainConsumer>{(BR:BlueRain) => (
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
			<BlueRainConsumer>{(BR:BlueRain) => (
				<BR.Components.View style={styles.colorControl}>
					<BR.Components.Text>{this.props.label}</BR.Components.Text>
					<BR.Components.View style={styles.onLeft}>
						<Paper elevation={2} style={styles.padding5}>
							<Button
									raised={true}
									style={{ display:'flex', justifyContent:'center', backgroundColor, minWidth:'36px', height: 14, width: 36 }}
									onClick={this.handleClick}
							/>
							{ this.state.displayColorPicker ? <Paper elevation={2}>
								<BR.Components.View style={styles.popover}>
									<BR.Components.View style={styles.cover} onPress={this.handleClose} />
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

export default ColorPicker ;




// export default withBlueRain(withStateful(ColorControl, {
// 	checkData: (props, dataProp) => {
// 		const {
// 			label,
// 			onChange,
// 			value,
// 			hs,
// 			} = props;
// 		if (label && typeof label !== 'string') {
// 			return false;
// 		} else if (onChange && typeof onChange !== 'function') {
// 			return false;
// 		} else if (value && typeof value !== 'object') {
// 			if (typeof value !== 'string') {
// 				return false;
// 			}
// 		} else if (hs && typeof hs !== 'boolean') {
// 			return false;
// 		}
// 		return true;
// 	},
// }));



// import * as React from 'react';
// import { BlueRain, BlueRainConsumer, withBlueRain } from '@blueeast/bluerain-os';
// // import { AssetInfo } from '../../../mocks/AssetInfo.mock';
// import { AssetInfoItem } from '../AssetInfoListItem';
// import { formatDeviceInfo } from '../../utils/FormatDeviceInfo';
// import Query from './query.graphql';

// // this component will be wrapped with graphql and then return data
// export interface AssetInfoListProperties {

// 	type?: string,
// 	brand?: string,

// }


// const isLoading = (props:any) => props.data.loading;
// const isEmpty = (props:any) => props.data ? false : true;
// const checkError = (props:any) => props.data.erorr;

// const getData = (props:any) => {
// 	try {
// 		return props.data.node.devices.edges.map((item:any) => item.node);
// 	}
// 	catch(e) {
// 		// return AssetInfo.data.node.devices.edges.map((item:any) => item.node);
// 		return {
// 			loading: props.loading,
// 			error: props.error,
// 			data: props.data
// 		};
// 	}
// };
// export const AssetInfoList = ( props:any) => {
// 	const { match } = props;
// 	const assetId = match.params.id;
// 	return (
// <BlueRainConsumer>
//         {(BR: BlueRain) => (
//             <BR.Components.GraphqlQuery query={Query} variables={{ assetId }}>
// 			{(response:any) => {
// 				const data:any = getData(response);
// 				const statefulProps = {
// 					isEmpty,
// 					isLoading,
// 					checkError
// 				};

// 				const AssetInfo:any = {} ;

// 				if(data.length) {
// 					    data.map((item:any) => {
// 						AssetInfo.macId = item.meta.macId;
// 						AssetInfo.firmware = item.meta.version ? item.meta.version.firmware : '';
// 						AssetInfo.hardware = item.meta.version ? item.meta.version.hardware : '';

// 						return AssetInfo;
// 					});

// 				}
//                 // // Build Component
// 				const items = formatDeviceInfo(AssetInfo).map((item:any) => {
// 					item.id = item.name;
// 					return item;
// 				});

// 				return (
// 			<BR.Components.StatefulComponent data={getData(response)} {...statefulProps}>
// 					<BR.Components.View style={{ overflow:'visible' }}>
//                 <BR.Components.Card {...props}>
//                     <BR.Components.List style={{ padding: 8 }}>
//                     {
// 			items.map(({ id, icon, label, value }, index) => {
// 				const key = id || index;
// 				const Divide = (index < items.length - 1) ? <BR.Components.Divider key={`${key}_divider`} /> : null;
// 				return [<AssetInfoItem key={key} icon={icon} label={label} value={value} />, Divide];
// 			})}
//                     </BR.Components.List>
//                 </BR.Components.Card>
//            </BR.Components.View>
// 			</BR.Components.StatefulComponent>
// 				);
// 			}}
// 			</BR.Components.GraphqlQuery>
//         )}
// </BlueRainConsumer>);
// };
