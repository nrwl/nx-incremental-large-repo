import React from 'react';
import { render } from '@testing-library/react';

import Lib4childlib8component12 from './lib4childlib8component12';

describe('Lib4childlib8component12', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib4childlib8component12 />);
    expect(baseElement).toBeTruthy();
  });
});
