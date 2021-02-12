import React from 'react';
import { render } from '@testing-library/react';

import Lib2childlib2component4 from './lib2childlib2component4';

describe('Lib2childlib2component4', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib2childlib2component4 />);
    expect(baseElement).toBeTruthy();
  });
});
