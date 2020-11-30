import React from 'react';
import { render } from '@testing-library/react';

import Lib4childlib8component42 from './lib4childlib8component42';

describe('Lib4childlib8component42', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib4childlib8component42 />);
    expect(baseElement).toBeTruthy();
  });
});
