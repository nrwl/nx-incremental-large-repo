import React from 'react';
import { render } from '@testing-library/react';

import Lib2childlib5component8 from './lib2childlib5component8';

describe('Lib2childlib5component8', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib2childlib5component8 />);
    expect(baseElement).toBeTruthy();
  });
});
