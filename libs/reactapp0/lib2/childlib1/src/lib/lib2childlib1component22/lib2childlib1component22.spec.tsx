import React from 'react';
import { render } from '@testing-library/react';

import Lib2childlib1component22 from './lib2childlib1component22';

describe('Lib2childlib1component22', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib2childlib1component22 />);
    expect(baseElement).toBeTruthy();
  });
});
