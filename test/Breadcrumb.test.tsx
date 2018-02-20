import { Breadcrumb } from '../src/components/Breadcrumb';
import { create } from 'react-test-renderer';
import React from 'react';


test('Breadcrumb component label and data props', () => {
	const data = [{ title:'CardView', path: 'https://www.facebook.com' }];
	const label = 'Site';
	const breadcrumb = create(
		<Breadcrumb data={data} label={label}/>
  ).toJSON();
	expect(breadcrumb.children).toHaveLength(2);
	expect(breadcrumb).toMatchSnapshot();
});
test('Breadcrumb component label, colorPrev and data props', () => {
	const data = [{ title:'CardView', path: 'https://www.facebook.com' }];
	const label = 'Site';
	const breadcrumb = create(
		<Breadcrumb data={data} label={label} colorPrev="purple" />
  ).toJSON();
	expect(breadcrumb.children).toHaveLength(2);
	expect(breadcrumb).toMatchSnapshot();
});
test('Breadcrumb component with no props, default style should be applied', () => {

	const defaultStyle = { color: 'black' };
	const breadcrumb = create(
		<Breadcrumb />
  ).toJSON();
	expect(breadcrumb.props.style).toEqual(defaultStyle);
	expect(breadcrumb).toMatchSnapshot();
});

test('Breadcrumb component colorPrev prop', () => {

	const defaultStyle = { color: 'black' };

	const breadcrumb = create(
		<Breadcrumb colorPrev="blue" />
  ).toJSON();
	expect(breadcrumb.props.style).toEqual(defaultStyle);
	expect(breadcrumb).toMatchSnapshot();
});

test('Breadcrumb component colorActive prop', () => {

	const defaultStyle = { color: 'green' };

	const breadcrumb = create(
		<Breadcrumb colorPrev="blue" colorActive="green" />
  ).toJSON();
	expect(breadcrumb.props.style).toEqual(defaultStyle);
	expect(breadcrumb).toMatchSnapshot();
});
