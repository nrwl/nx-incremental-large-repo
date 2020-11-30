import React from 'react';
import { render } from '@testing-library/react';

import Lib2childlib2component42 from './lib2childlib2component42';

describe('Lib2childlib2component42', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib2childlib2component42 />);
    expect(baseElement).toBeTruthy();
  });
});
