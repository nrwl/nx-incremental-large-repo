import React from 'react';
import { render } from '@testing-library/react';

import Lib2childlib1component36 from './lib2childlib1component36';

describe('Lib2childlib1component36', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib2childlib1component36 />);
    expect(baseElement).toBeTruthy();
  });
});
