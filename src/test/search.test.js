import React from 'react';
import Search from '../components/molecules/search';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
    const tree = renderer
        .create(<Search />)
        .toJSON();
    expect(tree).toMatchSnapshot();
});