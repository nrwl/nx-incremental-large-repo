import React from 'react';
import { render } from '@testing-library/react';

import Lib2childlib9component16 from './lib2childlib9component16';

describe('Lib2childlib9component16', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib2childlib9component16 />);
    expect(baseElement).toBeTruthy();
  });
});
