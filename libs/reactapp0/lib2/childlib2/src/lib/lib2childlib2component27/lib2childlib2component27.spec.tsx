import React from 'react';
import { render } from '@testing-library/react';

import Lib2childlib2component27 from './lib2childlib2component27';

describe('Lib2childlib2component27', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib2childlib2component27 />);
    expect(baseElement).toBeTruthy();
  });
});
