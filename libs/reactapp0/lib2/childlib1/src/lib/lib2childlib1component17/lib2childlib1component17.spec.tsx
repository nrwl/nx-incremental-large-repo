import React from 'react';
import { render } from '@testing-library/react';

import Lib2childlib1component17 from './lib2childlib1component17';

describe('Lib2childlib1component17', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib2childlib1component17 />);
    expect(baseElement).toBeTruthy();
  });
});
