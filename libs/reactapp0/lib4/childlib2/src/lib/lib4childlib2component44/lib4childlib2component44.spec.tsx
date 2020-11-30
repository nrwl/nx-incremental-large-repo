import React from 'react';
import { render } from '@testing-library/react';

import Lib4childlib2component44 from './lib4childlib2component44';

describe('Lib4childlib2component44', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib4childlib2component44 />);
    expect(baseElement).toBeTruthy();
  });
});
