import React from 'react';
import { render } from '@testing-library/react';

import Lib4childlib8component6 from './lib4childlib8component6';

describe('Lib4childlib8component6', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib4childlib8component6 />);
    expect(baseElement).toBeTruthy();
  });
});
