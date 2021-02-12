import React from 'react';
import { render } from '@testing-library/react';

import Lib2childlib1component19 from './lib2childlib1component19';

describe('Lib2childlib1component19', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib2childlib1component19 />);
    expect(baseElement).toBeTruthy();
  });
});
