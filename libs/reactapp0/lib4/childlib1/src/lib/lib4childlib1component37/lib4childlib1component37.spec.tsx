import React from 'react';
import { render } from '@testing-library/react';

import Lib4childlib1component37 from './lib4childlib1component37';

describe('Lib4childlib1component37', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib4childlib1component37 />);
    expect(baseElement).toBeTruthy();
  });
});
