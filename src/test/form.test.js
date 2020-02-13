import React from 'react';
import { render } from '@testing-library/react';
import Form from '../components/molecules/form';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
    const tree = renderer
        .create(<Form />)
        .toJSON();
    expect(tree).toMatchSnapshot();
});