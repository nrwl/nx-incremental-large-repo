import React from 'react';
import { render } from '@testing-library/react';

import Lib2childlib2component17 from './lib2childlib2component17';

describe('Lib2childlib2component17', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib2childlib2component17 />);
    expect(baseElement).toBeTruthy();
  });
});
