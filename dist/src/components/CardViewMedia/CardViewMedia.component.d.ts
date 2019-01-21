import * as React from 'react';
export interface CardviewMediaProperties {
    overlayTitle?: React.ReactNode;
    overlaySubTiltle?: React.ReactNode;
    overlayOverline?: React.ReactNode;
    src?: any;
    mediaHeight?: number;
    mediaWidth?: number;
    overlayColor?: string;
    mediaComponent?: 'video' | ' audio' | 'picture' | 'iframe' | 'img' | 'component';
    overlayDirection?: 'bottomRight' | 'bottomLeft' | 'topRight' | 'topLeft';
}
declare class CardViewMedia extends React.PureComponent<CardviewMediaProperties, any> {
    constructor(props: CardviewMediaProperties);
    render(): JSX.Element;
}
export default CardViewMedia;
