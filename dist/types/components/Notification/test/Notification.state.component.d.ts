/// <reference types="react" />
import React from 'react';
declare class PositionedSnackbar extends React.Component {
    state: {
        open: boolean;
        vertical: number;
        horizontal: number;
    };
    handleClick: (state: any) => () => void;
    handleClose: () => void;
    render(): JSX.Element;
}
export default PositionedSnackbar;
