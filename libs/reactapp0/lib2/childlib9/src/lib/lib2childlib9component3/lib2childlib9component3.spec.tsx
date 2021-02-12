import React from 'react';
import { render } from '@testing-library/react';

import Lib2childlib9component3 from './lib2childlib9component3';

describe('Lib2childlib9component3', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib2childlib9component3 />);
    expect(baseElement).toBeTruthy();
  });
});
