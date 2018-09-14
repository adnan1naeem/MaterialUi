import React from 'react';
declare class FadeMenu extends React.Component<any, {
    anchorEl: any;
    anchorEl2: any;
}> {
    state: {
        anchorEl: {};
        anchorEl2: {};
    };
    handleClick: (event: any) => void;
    handleClose: () => void;
    render(): JSX.Element;
}
export default FadeMenu;
