import React from 'react';
import { render } from '@testing-library/react';

import Lib4childlib2component37 from './lib4childlib2component37';

describe('Lib4childlib2component37', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib4childlib2component37 />);
    expect(baseElement).toBeTruthy();
  });
});
