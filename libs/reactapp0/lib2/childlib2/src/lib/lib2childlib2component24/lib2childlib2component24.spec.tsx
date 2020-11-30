import React from 'react';
import { render } from '@testing-library/react';

import Lib2childlib2component24 from './lib2childlib2component24';

describe('Lib2childlib2component24', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib2childlib2component24 />);
    expect(baseElement).toBeTruthy();
  });
});
