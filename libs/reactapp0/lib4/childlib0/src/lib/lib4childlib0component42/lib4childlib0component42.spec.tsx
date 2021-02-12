import React from 'react';
import { render } from '@testing-library/react';

import Lib4childlib0component42 from './lib4childlib0component42';

describe('Lib4childlib0component42', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib4childlib0component42 />);
    expect(baseElement).toBeTruthy();
  });
});
