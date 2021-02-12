import React from 'react';
import { render } from '@testing-library/react';

import Lib2childlib9component25 from './lib2childlib9component25';

describe('Lib2childlib9component25', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib2childlib9component25 />);
    expect(baseElement).toBeTruthy();
  });
});
