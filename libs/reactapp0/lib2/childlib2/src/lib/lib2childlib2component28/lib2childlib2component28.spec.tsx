import React from 'react';
import { render } from '@testing-library/react';

import Lib2childlib2component28 from './lib2childlib2component28';

describe('Lib2childlib2component28', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib2childlib2component28 />);
    expect(baseElement).toBeTruthy();
  });
});
