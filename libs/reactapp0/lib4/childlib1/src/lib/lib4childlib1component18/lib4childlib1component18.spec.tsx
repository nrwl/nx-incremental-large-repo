import React from 'react';
import { render } from '@testing-library/react';

import Lib4childlib1component18 from './lib4childlib1component18';

describe('Lib4childlib1component18', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib4childlib1component18 />);
    expect(baseElement).toBeTruthy();
  });
});
