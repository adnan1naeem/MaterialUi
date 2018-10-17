import React from 'react';
declare class FadeMenu extends React.Component<any, {
    anchorEl: any;
    anchorEl2: any;
}> {
    state: {
        anchorEl: null;
        anchorEl2: null;
    };
    handleClick: (event: any) => void;
    handleClose: () => void;
    render(): JSX.Element;
}
export default FadeMenu;
