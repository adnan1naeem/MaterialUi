import React from 'react';
import RX from 'reactxp';
import { withBlueRain } from '@blueeast/bluerain-os';
import { FormattedMessage } from 'react-intl';
import  { ILocation } from '@blueeast/bluerain-ui-interfaces/Components/Location';
import { Gmaps, Marker } from 'react-gmaps';

/**
 * The Map Component.
 * @param {Object} props The component props
 * @param {Node} props.enableHighAccuracy The enableHighAccuracy of location
 * @param {Node} props.timeout Number of milliseconds before timeout
 * @param {Node} props.maximumAge Max age (in milliseconds) before cached location is invalidated
 */

interface ILocationReactGmaps {
    enableHighAccuracy:boolean,
    timeout: number,
    maximumAge: number,
    bluerain: object,
    zoom: number
}

const Location = (props: ILocation & ILocationReactGmaps) => {
    return (
        <Gmaps lat={props.region.lat} lng={props.region.lng} {...props}>
            <Marker lat={props.region.lat} lng={props.region.lng} {...props} />
        </Gmaps>);

};

export default Location;
// const style = {
//     error:
//         {
//             display:'flex',
//             justifyContent:'flex-start',
//             fontSize:20,
//             padding:20,
//             backgroundColor:'#fcf8e3'
//         },
//     warning:{
//         fontWeight:'bold'
//     }
// };
// class Location extends React.Component<LocationProps> {
//
//     constructor(props:any) {
//         super(props);
//         this.state = {
//             lat: '31.3892751',
//             long: '74.1502481',
//             error:false,
//         };
//     }
//     componentDidMount() {
//         const { enableHighAccuracy, timeout, maximumAge } = this.props;
//
//         RX.Location.getCurrentPosition({ enableHighAccuracy, timeout, maximumAge } ).then((position) => {
//             this.setState({
//                 lat: position.coords.latitude,
//                 long: position.coords.longitude
//             });
//         })
//             .catch(
//                 // Log the rejection reason
//                 (reason) => {
//                     this.setState({
//                         error: true,
//                     });
//                 });
//
//     }
//     // Google Map
//     getMap() {
//
//         const { bluerain, zoom } = this.props;
//         const View = bluerain.Components.get('View');
//         const Text = bluerain.Components.get('Text');
//
//         return (<View> <Gmaps
//                 width={'100%'}
//                 height={'600px'}
//                 id="my_map"
//                 lat={this.state.lat}
//                 lng={this.state.long}
//                 zoom={zoom}
//                 params={{ v: '3.exp', key: 'AIzaSyCgVYH02v3XYmCSIokoLOZzvUqJG6ZamMY' }}
//             >
//                 <Marker
//                     lat={this.state.lat}
//                     lng={this.state.long}
//                     draggable
//                 />
//             </Gmaps>
//                 <Paper className="alert alert-warning" role="alert" style={style.error}>
//                     <Place />
//                     <Text style={style.warning}><FormattedMessage id="Warning" defaultMessage="Warning"  /> </Text>
//                     <FormattedMessage
//                    id="Location.Error" defaultMessage="Error getting
//                       Location Please check Location services on your device"  /></Paper></View>
//         );
//     }
//
//
//     render() {
//         const { bluerain } = this.props;
//         const View = bluerain.Components.get('View');
//         return (
//             <View>
//                 { this.getMap()}
//             </View>
//
//
//         );
//     }
// }
// export default withBlueRain(Location);


