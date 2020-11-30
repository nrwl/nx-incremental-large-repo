import React from 'react';
import { render } from '@testing-library/react';

import Lib4childlib0component21 from './lib4childlib0component21';

describe('Lib4childlib0component21', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib4childlib0component21 />);
    expect(baseElement).toBeTruthy();
  });
});
