import React from 'react';
import { render } from '@testing-library/react';

import Lib4childlib0component0 from './lib4childlib0component0';

describe('Lib4childlib0component0', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib4childlib0component0 />);
    expect(baseElement).toBeTruthy();
  });
});
