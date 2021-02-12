import React from 'react';
import { render } from '@testing-library/react';

import Lib4childlib8component15 from './lib4childlib8component15';

describe('Lib4childlib8component15', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib4childlib8component15 />);
    expect(baseElement).toBeTruthy();
  });
});
