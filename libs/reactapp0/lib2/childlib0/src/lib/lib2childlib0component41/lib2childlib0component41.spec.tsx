import React from 'react';
import { render } from '@testing-library/react';

import Lib2childlib0component41 from './lib2childlib0component41';

describe('Lib2childlib0component41', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib2childlib0component41 />);
    expect(baseElement).toBeTruthy();
  });
});
