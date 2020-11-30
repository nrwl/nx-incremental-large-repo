import React from 'react';
import { render } from '@testing-library/react';

import Lib2childlib9component6 from './lib2childlib9component6';

describe('Lib2childlib9component6', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib2childlib9component6 />);
    expect(baseElement).toBeTruthy();
  });
});
