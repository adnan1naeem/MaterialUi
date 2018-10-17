"use strict";
// import * as React from 'react';
// import { AppBar } from '../../AppBar';
// import { Button } from '../../Button';
// import { text, withKnobs } from '@storybook/addon-knobs';
// import { storiesOf } from '@storybook/react';
// import AssignmentIcon from 'material-ui-icons/Assignment';
// import { ArrowBack } from 'material-ui-icons';
// import BR from '@blueeast/bluerain-os';
// const stories = storiesOf('AppBar', module);
// const AppBarStoriesStyle = {
// 	backgroundColor: 'transparent',
// 	boxShadow: 'none',
// 	border: 0
// };
// stories.addDecorator(withKnobs).add('AppBar with primary color and position="fixed"', () => {
// 	return (
// 		<AppBar left={<Button fab={true} style={AppBarStoriesStyle}>
// 			<AssignmentIcon />
// 		</Button>}
// 			title={text('Title', 'title')}
// 			right={<Button color="primary">Login</Button>}
// 			position="fixed"
// 			color="primary"
// 			style={{ backgroundColor: 'red' }}>
// 		</AppBar>
// 	);
// });
// stories.add('AppBar with primary color and  position="absolute"', () => {
// 	return (
// 		<AppBar position="absolute" left={<Button fab={true} style={AppBarStoriesStyle}>
// 			<AssignmentIcon />
// 		</Button>} title={'Title'} right={<Button color="secondary">Login</Button>} color="primary" />
// 	);
// });
// stories.add('AppBar with accent color', () => {
// 	return (
// 		<AppBar color="accent" left={<Button fab={true} style={AppBarStoriesStyle}><AssignmentIcon /></Button>} title={'Title'} right={<Button color="primary">Login</Button>} />
// 	);
// });
// stories.add('AppBar without right prop', () => {
// 	return (
// 		<AppBar color="accent" left={<Button fab={true} style={AppBarStoriesStyle}><AssignmentIcon /></Button>} title={'Title'} />
// 	);
// });
// stories.add('AppBar without  left prop', () => {
// 	return (
// 		<AppBar color="accent" title={'Title'} right={<Button color="primary">Login</Button>} />
// 	);
// });
// stories.add('AppBar without title', () => {
// 	return (
// 		<AppBar color="accent" left={<Button fab={true} style={AppBarStoriesStyle}><AssignmentIcon /></Button>} right={<Button color="primary">Login</Button>} />
// 	);
// });
// stories.add('AppBar with left ,right and title approach', () => {
// 	return (
// 		<AppBar
// 			left={<Button transparent><ArrowBack/></Button>}
// 			title="appbar"
// 			right={<Button transparent>Cancel</Button>}
// 		/>
// 	);
// });
// stories.add('AppBar with style object', () => {
// 	return (<AppBar style={{ backgroundColor: 'red' }} />);
// });
// stories.add('AppBar with only left node', () => {
// 	return (<AppBar left={<Button transparent><ArrowBack /></Button>} />);
// });
// stories.add('AppBar with only right node', () => {
// 	return (<AppBar right={<Button transparent>Cancel</Button>} />);
// });
// stories.add('AppBar with only title', () => {
// 	return (<AppBar title="appbar" />);
// });
//# sourceMappingURL=AppBar.stories.js.map