import React from 'react';
import { render } from '@testing-library/react';

import Lib2childlib2component19 from './lib2childlib2component19';

describe('Lib2childlib2component19', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib2childlib2component19 />);
    expect(baseElement).toBeTruthy();
  });
});
