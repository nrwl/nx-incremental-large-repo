import React from 'react';
import { render } from '@testing-library/react';

import Lib4childlib1component0 from './lib4childlib1component0';

describe('Lib4childlib1component0', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib4childlib1component0 />);
    expect(baseElement).toBeTruthy();
  });
});
