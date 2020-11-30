import React from 'react';
import { render } from '@testing-library/react';

import Lib4childlib0component22 from './lib4childlib0component22';

describe('Lib4childlib0component22', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib4childlib0component22 />);
    expect(baseElement).toBeTruthy();
  });
});
