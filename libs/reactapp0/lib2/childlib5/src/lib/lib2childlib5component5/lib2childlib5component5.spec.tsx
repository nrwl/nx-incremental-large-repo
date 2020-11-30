import React from 'react';
import { render } from '@testing-library/react';

import Lib2childlib5component5 from './lib2childlib5component5';

describe('Lib2childlib5component5', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib2childlib5component5 />);
    expect(baseElement).toBeTruthy();
  });
});
