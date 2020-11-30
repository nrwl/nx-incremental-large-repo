import React from 'react';
import { render } from '@testing-library/react';

import Lib2childlib5component26 from './lib2childlib5component26';

describe('Lib2childlib5component26', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib2childlib5component26 />);
    expect(baseElement).toBeTruthy();
  });
});
