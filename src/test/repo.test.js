import React from 'react';
import { render } from '@testing-library/react';
import Repo from '../components/molecules/repo';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
    const tree = renderer
        .create(<Repo />)
        .toJSON();
    expect(tree).toMatchSnapshot();
});