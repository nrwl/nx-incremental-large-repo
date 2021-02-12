import React from 'react';
import { render } from '@testing-library/react';

import Lib4childlib2component15 from './lib4childlib2component15';

describe('Lib4childlib2component15', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib4childlib2component15 />);
    expect(baseElement).toBeTruthy();
  });
});
