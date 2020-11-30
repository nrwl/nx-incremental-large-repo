import React from 'react';
import { render } from '@testing-library/react';

import Lib2childlib5component0 from './lib2childlib5component0';

describe('Lib2childlib5component0', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib2childlib5component0 />);
    expect(baseElement).toBeTruthy();
  });
});
