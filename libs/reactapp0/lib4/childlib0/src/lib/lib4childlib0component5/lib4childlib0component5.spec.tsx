import React from 'react';
import { render } from '@testing-library/react';

import Lib4childlib0component5 from './lib4childlib0component5';

describe('Lib4childlib0component5', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib4childlib0component5 />);
    expect(baseElement).toBeTruthy();
  });
});
