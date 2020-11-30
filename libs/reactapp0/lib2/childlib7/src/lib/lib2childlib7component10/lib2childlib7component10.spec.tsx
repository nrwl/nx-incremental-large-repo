import React from 'react';
import { render } from '@testing-library/react';

import Lib2childlib7component10 from './lib2childlib7component10';

describe('Lib2childlib7component10', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib2childlib7component10 />);
    expect(baseElement).toBeTruthy();
  });
});
