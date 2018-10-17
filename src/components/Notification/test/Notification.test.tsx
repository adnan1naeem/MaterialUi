// import React from 'react';
// import Adapter from 'enzyme-adapter-react-16';
// import renderer from 'react-test-renderer';
// import { Notification } from '../';
// import { configure, mount, shallow, } from 'enzyme';
// configure({ adapter: new Adapter() });
// test('render correctly', () => {
//   const notification = shallow(
//     <Notification
//       open={() => console.log('open')}
//       onClose={() => console.log('open')}
//       transition={''}
//       SnackbarContentProps={{ 'aria-describedby': 'message-id' }}
//       text={<span id="message-id">I love snacks</span>}
//     />
//   );
//   expect(notification).toBeDefined();
//   expect(notification).toMatchSnapshot();
// });