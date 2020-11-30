import React from 'react';
import { render } from '@testing-library/react';

import Lib2childlib9component20 from './lib2childlib9component20';

describe('Lib2childlib9component20', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib2childlib9component20 />);
    expect(baseElement).toBeTruthy();
  });
});
