import React from 'react';
import { render } from '@testing-library/react';

import Lib4childlib2component18 from './lib4childlib2component18';

describe('Lib4childlib2component18', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib4childlib2component18 />);
    expect(baseElement).toBeTruthy();
  });
});
