import React from 'react';
import { render } from '@testing-library/react';

import Lib4childlib0component2 from './lib4childlib0component2';

describe('Lib4childlib0component2', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib4childlib0component2 />);
    expect(baseElement).toBeTruthy();
  });
});
