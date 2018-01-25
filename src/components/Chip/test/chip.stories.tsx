/**
 * Created by Ghazal Taimur on 12/29/17.
 */
import * as React from 'react';
import Chip from '../../Chip';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean, object} from '@storybook/addon-knobs';
import { emphasize } from 'material-ui/styles/colorManipulator';
const color = emphasize('#fff', 0);
const backgroundColor = emphasize('#0f0', 0);
const chipDefaultStyle = {'background-color':backgroundColor,'color':color};
const stories = storiesOf('Chip', module);
stories.add('Chip with default value', () => {
    return <Chip>12 % off</Chip>;
});

stories.add('Chip with style', () => {
   // const styleProps = {'background-color': backgroundColor};
    const style = object('Style of Chip',chipDefaultStyle);
	const content = text('Text', '10 % off');
	return <Chip style={style}>{content}</Chip>;
});

stories.add('Chip Onclick', () => {
	const style = object('Style of Chip', chipDefaultStyle);
	const content = text('Text', '10 % off');
	return <Chip style={style} onClick={action('Chip clicked')} >{content}</Chip>;
});

stories.add('Chip without knobs', () => {
	return <Chip style={chipDefaultStyle}>10 % off</Chip>;
});