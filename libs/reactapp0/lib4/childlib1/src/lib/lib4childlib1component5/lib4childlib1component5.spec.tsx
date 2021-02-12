import React from 'react';
import { render } from '@testing-library/react';

import Lib4childlib1component5 from './lib4childlib1component5';

describe('Lib4childlib1component5', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib4childlib1component5 />);
    expect(baseElement).toBeTruthy();
  });
});
