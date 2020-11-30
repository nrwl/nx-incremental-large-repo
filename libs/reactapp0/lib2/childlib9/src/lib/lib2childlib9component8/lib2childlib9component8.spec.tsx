import React from 'react';
import { render } from '@testing-library/react';

import Lib2childlib9component8 from './lib2childlib9component8';

describe('Lib2childlib9component8', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib2childlib9component8 />);
    expect(baseElement).toBeTruthy();
  });
});
