import React from 'react';
import { render } from '@testing-library/react';

import Lib2childlib2component13 from './lib2childlib2component13';

describe('Lib2childlib2component13', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib2childlib2component13 />);
    expect(baseElement).toBeTruthy();
  });
});
