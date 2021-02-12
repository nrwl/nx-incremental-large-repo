import React from 'react';
import { render } from '@testing-library/react';

import Lib2childlib2component39 from './lib2childlib2component39';

describe('Lib2childlib2component39', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib2childlib2component39 />);
    expect(baseElement).toBeTruthy();
  });
});
