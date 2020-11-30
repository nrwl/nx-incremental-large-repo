import React from 'react';
import { render } from '@testing-library/react';

import Lib2childlib2component8 from './lib2childlib2component8';

describe('Lib2childlib2component8', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib2childlib2component8 />);
    expect(baseElement).toBeTruthy();
  });
});
