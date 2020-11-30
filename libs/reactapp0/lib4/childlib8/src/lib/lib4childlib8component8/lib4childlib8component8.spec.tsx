import React from 'react';
import { render } from '@testing-library/react';

import Lib4childlib8component8 from './lib4childlib8component8';

describe('Lib4childlib8component8', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib4childlib8component8 />);
    expect(baseElement).toBeTruthy();
  });
});
