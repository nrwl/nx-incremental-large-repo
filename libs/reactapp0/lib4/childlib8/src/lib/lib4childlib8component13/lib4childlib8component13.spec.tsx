import React from 'react';
import { render } from '@testing-library/react';

import Lib4childlib8component13 from './lib4childlib8component13';

describe('Lib4childlib8component13', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib4childlib8component13 />);
    expect(baseElement).toBeTruthy();
  });
});
