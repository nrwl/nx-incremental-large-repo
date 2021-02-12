import React from 'react';
import { render } from '@testing-library/react';

import Lib2childlib1component4 from './lib2childlib1component4';

describe('Lib2childlib1component4', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib2childlib1component4 />);
    expect(baseElement).toBeTruthy();
  });
});
