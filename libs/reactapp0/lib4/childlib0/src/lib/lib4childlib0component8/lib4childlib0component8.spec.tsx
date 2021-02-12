import React from 'react';
import { render } from '@testing-library/react';

import Lib4childlib0component8 from './lib4childlib0component8';

describe('Lib4childlib0component8', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib4childlib0component8 />);
    expect(baseElement).toBeTruthy();
  });
});
