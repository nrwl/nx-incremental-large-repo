import React from 'react';
import { render } from '@testing-library/react';

import Lib2childlib2component31 from './lib2childlib2component31';

describe('Lib2childlib2component31', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib2childlib2component31 />);
    expect(baseElement).toBeTruthy();
  });
});
