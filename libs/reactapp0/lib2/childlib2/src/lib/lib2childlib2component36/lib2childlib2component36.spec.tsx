import React from 'react';
import { render } from '@testing-library/react';

import Lib2childlib2component36 from './lib2childlib2component36';

describe('Lib2childlib2component36', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib2childlib2component36 />);
    expect(baseElement).toBeTruthy();
  });
});
