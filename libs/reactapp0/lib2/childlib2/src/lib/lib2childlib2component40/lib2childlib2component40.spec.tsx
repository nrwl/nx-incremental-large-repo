import React from 'react';
import { render } from '@testing-library/react';

import Lib2childlib2component40 from './lib2childlib2component40';

describe('Lib2childlib2component40', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib2childlib2component40 />);
    expect(baseElement).toBeTruthy();
  });
});
