import React from 'react';
import { render } from '@testing-library/react';

import Lib2childlib1component2 from './lib2childlib1component2';

describe('Lib2childlib1component2', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib2childlib1component2 />);
    expect(baseElement).toBeTruthy();
  });
});
