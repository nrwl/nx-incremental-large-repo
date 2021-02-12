import React from 'react';
import { render } from '@testing-library/react';

import Lib2childlib2component33 from './lib2childlib2component33';

describe('Lib2childlib2component33', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib2childlib2component33 />);
    expect(baseElement).toBeTruthy();
  });
});
