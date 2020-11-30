import React from 'react';
import { render } from '@testing-library/react';

import Lib4childlib2component36 from './lib4childlib2component36';

describe('Lib4childlib2component36', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib4childlib2component36 />);
    expect(baseElement).toBeTruthy();
  });
});
