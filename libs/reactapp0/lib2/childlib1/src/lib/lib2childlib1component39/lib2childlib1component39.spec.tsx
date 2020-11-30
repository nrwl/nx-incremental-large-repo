import React from 'react';
import { render } from '@testing-library/react';

import Lib2childlib1component39 from './lib2childlib1component39';

describe('Lib2childlib1component39', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib2childlib1component39 />);
    expect(baseElement).toBeTruthy();
  });
});
