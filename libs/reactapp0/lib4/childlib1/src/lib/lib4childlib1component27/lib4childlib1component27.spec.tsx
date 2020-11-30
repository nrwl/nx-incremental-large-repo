import React from 'react';
import { render } from '@testing-library/react';

import Lib4childlib1component27 from './lib4childlib1component27';

describe('Lib4childlib1component27', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib4childlib1component27 />);
    expect(baseElement).toBeTruthy();
  });
});
