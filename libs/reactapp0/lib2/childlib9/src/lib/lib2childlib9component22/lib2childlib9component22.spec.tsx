import React from 'react';
import { render } from '@testing-library/react';

import Lib2childlib9component22 from './lib2childlib9component22';

describe('Lib2childlib9component22', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib2childlib9component22 />);
    expect(baseElement).toBeTruthy();
  });
});
