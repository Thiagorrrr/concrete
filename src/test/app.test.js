import React from 'react';
import { render } from '@testing-library/react';
import App from '../components/organisms/App';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
    const tree = renderer
        .create(<App />)
        .toJSON();
    expect(tree).toMatchSnapshot();
});