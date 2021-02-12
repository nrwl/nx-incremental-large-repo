import React from 'react';
import { render } from '@testing-library/react';

import Lib4childlib8component4 from './lib4childlib8component4';

describe('Lib4childlib8component4', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib4childlib8component4 />);
    expect(baseElement).toBeTruthy();
  });
});
