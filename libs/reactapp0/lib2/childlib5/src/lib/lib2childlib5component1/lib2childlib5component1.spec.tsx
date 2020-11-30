import React from 'react';
import { render } from '@testing-library/react';

import Lib2childlib5component1 from './lib2childlib5component1';

describe('Lib2childlib5component1', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib2childlib5component1 />);
    expect(baseElement).toBeTruthy();
  });
});
