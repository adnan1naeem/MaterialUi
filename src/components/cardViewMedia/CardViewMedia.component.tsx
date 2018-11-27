import * as React from 'react';
import BR from '@blueeast/bluerain-os';
export interface CardviewMediaProperties {
  overlayTitle?: React.ReactNode;
  overlaySubTiltle?: React.ReactNode;
  overlayOverline?: React.ReactNode;
  src?: any;
  mediaHeight?: number,
  mediaWidth?: number,
  overlayColor?: string,
  mediaComponent?: 'video' | ' audio' | 'picture' | 'iframe' | 'img' | 'component';
  overlayDirection?: 'bottomRight' | 'bottomLeft' | 'topRight' | 'topLeft';
}

class CardViewMedia extends React.PureComponent<CardviewMediaProperties, any> {
  constructor(props: CardviewMediaProperties) {
    super(props);
  }
  render() {
    const directionStyle: any = {
      flexDirection: 'column',
      justifyContent: 'flex-start',
      alignItems: 'flex-start',
      textAlign: 'left'
    }
    if (this.props.overlayDirection === 'topRight' || this.props.overlayDirection === 'bottomRight') {
      directionStyle.alignItems = 'flex-end';
      directionStyle.textAlign = 'right'
    }
    if (this.props.overlayDirection === 'bottomLeft') {
      directionStyle.justifyContent = 'flex-end';
      directionStyle.textAlign = 'left'
    }
    if (this.props.overlayDirection === 'bottomRight') {
      directionStyle.justifyContent = 'flex-end';
      directionStyle.textAlign = 'right'
    }
    const overlayTitleProp = typeof this.props.overlayTitle === 'string' ? <BR.Components.Overline >{this.props.overlayTitle}</BR.Components.Overline> : this.props.overlayTitle;
    const overlaySubtitleProp = typeof this.props.overlaySubTiltle === 'string' ? <BR.Components.H6 >{this.props.overlaySubTiltle}</BR.Components.H6> : this.props.overlaySubTiltle;
    const overlayOverlineProp = typeof this.props.overlayOverline === 'string' ? <BR.Components.Subtitle2 >{this.props.overlayOverline}</BR.Components.Subtitle2> : this.props.overlayOverline;

    if (this.props.mediaComponent === 'img') {
      return (
        <BR.Components.View style={{ width: this.props.mediaWidth, height: this.props.mediaHeight }}>
          <BR.Components.CardMedia component={'img'} style={{ position: 'absolute', width: this.props.mediaWidth, height: this.props.mediaHeight, backgroundColor: !this.props.src ? '#cfcfcf' : 'transparent' }} src={this.props.src} />
          <BR.Components.View style={{ backgroundColor: this.props.overlayColor, width: this.props.mediaWidth, height: this.props.mediaHeight }}>
            <BR.Components.View style={{ padding: 16, ...directionStyle, width: this.props.mediaWidth, height: this.props.mediaHeight }}>
              {overlayTitleProp}
              {overlaySubtitleProp}
              {overlayOverlineProp}
            </BR.Components.View>
          </BR.Components.View>
        </BR.Components.View>
      );
    }

    return (
      <BR.Components.View style={{ width: this.props.mediaWidth, height: this.props.mediaHeight }}>
        <BR.Components.CardMedia component={this.props.mediaComponent} style={{ position: 'absolute', width: this.props.mediaWidth, height: this.props.mediaHeight, backgroundColor: !this.props.src ? '#cfcfcf' : 'transparent' }} src={this.props.src} />
        <BR.Components.View style={{ backgroundColor: this.props.overlayColor, width: this.props.mediaWidth, height: this.props.mediaHeight }}>
          <BR.Components.View style={{ padding: 16, ...directionStyle, width: this.props.mediaWidth, height: this.props.mediaHeight }}>
            {overlayTitleProp}
            {overlaySubtitleProp}
            {overlayOverlineProp}
          </BR.Components.View>
        </BR.Components.View>
      </BR.Components.View>
    );
  }
}
export default CardViewMedia;