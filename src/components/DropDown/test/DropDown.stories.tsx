import React from 'react';
import { storiesOf } from '@storybook/react';
import Paper from 'material-ui/Paper';
import DropDown from '../component/DropDown';
const stories = storiesOf('DropDown', module);

const DropDownList = [
    {
        id:1,
        label:'Home',
        value:'home',
        image:'https://s3.amazonaws.com/uifaces/faces/twitter/jsa/128.jpg'
     },
    {
        id:2,
        label:'Work',
        value:'work',
        image:'https://s3.amazonaws.com/uifaces/faces/twitter/jsa/128.jpg'
    }, {
        id:1,
        label:'Outside',
        value:'Outside',
        image:'https://s3.amazonaws.com/uifaces/faces/twitter/jsa/128.jpg'
    },
    {
        id:2,
        label:'Work',
        value:'work',
        image:'https://s3.amazonaws.com/uifaces/faces/twitter/jsa/128.jpg'
    }
];
stories.add('DropDown', () => (
    <Paper style={{padding:20}}><DropDown onChange={()=>console.log('Button pressed')}  style={{width:400}}  value={'home'} items={DropDownList}></DropDown></Paper>
));