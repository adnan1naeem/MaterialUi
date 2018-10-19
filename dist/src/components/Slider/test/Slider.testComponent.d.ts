import React from 'react';
declare class SimpleSlider extends React.Component<any, any> {
    state: {
        value: number;
    };
    handleChange: (event: any, value: any) => void;
    render(): JSX.Element;
}
export default SimpleSlider;
