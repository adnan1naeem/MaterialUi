import { Card, CardBody, CardFooter, CardHeader, CardMedia } from '../';
import renderer from 'react-test-renderer';
import React from 'react';


test('Card component with tag props', () => {
	const card = renderer.create(
		<Card tag="span"></Card>
  ).toJSON();
	expect(card.props.tag).toEqual('span');
	expect(card).toMatchSnapshot();
});

test('Card component with children props', () => {
	const card = renderer.create(
		<Card tag="span"><div>Hello</div></Card>
  ).toJSON();
	expect(card.props.children).toEqual(undefined);
	expect(card).toMatchSnapshot();
});

test('CardMedia with children props', () => {
	const cardmedia = renderer.create(
		<CardMedia className="span" src="https://material-ui-next.com/static/images/remy.jpg"></CardMedia>
  ).toJSON();
	expect(cardmedia.props.className).toEqual('MuiCardMedia-root-28 span');
	expect(cardmedia).toMatchSnapshot();
});

test('CardBody with children props', () => {
	const cardbody= renderer.create(
		<CardBody className="span" style={{ width:200 }}></CardBody>
  ).toJSON();
	expect(cardbody.props.style).toEqual({ width:200 });
	expect(cardbody).toMatchSnapshot();
});

test('CardHeader with children props', () => {
	const cardheader= renderer.create(
		<CardHeader className="span" title="hello">second</CardHeader>
  ).toJSON();
	expect(cardheader.props.title).toEqual(undefined);
	expect(cardheader).toMatchSnapshot();
});

test('CardFooter with children props', () => {
	const cardfooter=renderer.create(
		<CardFooter className="span">second</CardFooter>
  ).toJSON();
	expect(cardfooter.props.children).toEqual(undefined);
	expect(cardfooter).toMatchSnapshot();
});