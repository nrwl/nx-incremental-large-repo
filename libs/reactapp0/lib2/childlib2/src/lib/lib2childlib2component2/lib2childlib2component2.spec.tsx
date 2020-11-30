import React from 'react';
import { render } from '@testing-library/react';

import Lib2childlib2component2 from './lib2childlib2component2';

describe('Lib2childlib2component2', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib2childlib2component2 />);
    expect(baseElement).toBeTruthy();
  });
});
