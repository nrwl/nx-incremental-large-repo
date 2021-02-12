import React from 'react';
import { render } from '@testing-library/react';

import Lib2childlib9component10 from './lib2childlib9component10';

describe('Lib2childlib9component10', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib2childlib9component10 />);
    expect(baseElement).toBeTruthy();
  });
});
