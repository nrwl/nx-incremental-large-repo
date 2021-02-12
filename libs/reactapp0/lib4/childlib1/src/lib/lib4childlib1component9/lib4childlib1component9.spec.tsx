import React from 'react';
import { render } from '@testing-library/react';

import Lib4childlib1component9 from './lib4childlib1component9';

describe('Lib4childlib1component9', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib4childlib1component9 />);
    expect(baseElement).toBeTruthy();
  });
});
