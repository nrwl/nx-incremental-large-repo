import React from 'react';
import { render } from '@testing-library/react';

import Lib4childlib0component25 from './lib4childlib0component25';

describe('Lib4childlib0component25', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib4childlib0component25 />);
    expect(baseElement).toBeTruthy();
  });
});
