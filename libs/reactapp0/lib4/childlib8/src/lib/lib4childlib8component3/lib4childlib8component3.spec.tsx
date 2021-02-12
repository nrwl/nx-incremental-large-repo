import React from 'react';
import { render } from '@testing-library/react';

import Lib4childlib8component3 from './lib4childlib8component3';

describe('Lib4childlib8component3', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib4childlib8component3 />);
    expect(baseElement).toBeTruthy();
  });
});
