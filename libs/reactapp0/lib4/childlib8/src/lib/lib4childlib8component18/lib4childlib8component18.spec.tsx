import React from 'react';
import { render } from '@testing-library/react';

import Lib4childlib8component18 from './lib4childlib8component18';

describe('Lib4childlib8component18', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib4childlib8component18 />);
    expect(baseElement).toBeTruthy();
  });
});
