
import { MemoryRouter } from 'react-router-dom';
import { create } from 'react-test-renderer';
import Breadcrumb from '../src/components/Breadcrumb';
import React from 'react';


test('Breadcrumb component label and data props', () => {
	const data = [{ title:'CardView', path: 'https://www.facebook.com' }];
	const label = 'Site';
	const breadcrumb = create(
		<MemoryRouter><Breadcrumb data={data} label={label}/></MemoryRouter>
  ).toJSON();
	expect(breadcrumb.children).toHaveLength(2);
	expect(breadcrumb).toMatchSnapshot();
});
test('Breadcrumb component label, colorPrev and data props', () => {
	const data = [{ title:'CardView', path: 'https://www.facebook.com' }];
	const label = 'Site';
	const breadcrumb = create(
		<MemoryRouter><Breadcrumb data={data} label={label} colorPrev="purple" /></MemoryRouter>
  ).toJSON();
	expect(breadcrumb.children).toHaveLength(2);
	expect(breadcrumb).toMatchSnapshot();
});
test('Breadcrumb component with no props, default style should be applied', () => {

	const defaultStyle = { color: 'black' };
	const breadcrumb = create(
		<MemoryRouter><Breadcrumb /></MemoryRouter>
  ).toJSON();
	expect(breadcrumb.props.style).toEqual(defaultStyle);
	expect(breadcrumb).toMatchSnapshot();
});

test('Breadcrumb component colorPrev prop', () => {

	const defaultStyle = { color: 'black' };

	const breadcrumb = create(
		<MemoryRouter><Breadcrumb colorPrev="blue" /></MemoryRouter>
  ).toJSON();
	expect(breadcrumb.props.style).toEqual(defaultStyle);
	expect(breadcrumb).toMatchSnapshot();
});

test('Breadcrumb component colorActive prop', () => {

	const defaultStyle = { color: 'green' };

	const breadcrumb = create(
		<MemoryRouter><Breadcrumb colorPrev="blue" colorActive="green" /></MemoryRouter>
  ).toJSON();
	expect(breadcrumb.props.style).toEqual(defaultStyle);
	expect(breadcrumb).toMatchSnapshot();
});
