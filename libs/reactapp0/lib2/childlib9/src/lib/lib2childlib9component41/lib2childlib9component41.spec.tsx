import React from 'react';
import { render } from '@testing-library/react';

import Lib2childlib9component41 from './lib2childlib9component41';

describe('Lib2childlib9component41', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib2childlib9component41 />);
    expect(baseElement).toBeTruthy();
  });
});
