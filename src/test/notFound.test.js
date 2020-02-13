import React from 'react';
import { render } from '@testing-library/react';
import NotFound from '../components/molecules/notFound';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
    const tree = renderer
        .create(<NotFound />)
        .toJSON();
    expect(tree).toMatchSnapshot();
});