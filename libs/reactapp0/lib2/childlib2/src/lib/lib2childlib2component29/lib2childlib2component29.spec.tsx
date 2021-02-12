import React from 'react';
import { render } from '@testing-library/react';

import Lib2childlib2component29 from './lib2childlib2component29';

describe('Lib2childlib2component29', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib2childlib2component29 />);
    expect(baseElement).toBeTruthy();
  });
});
