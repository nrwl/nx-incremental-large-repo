import React from 'react';
import { render } from '@testing-library/react';

import Lib4childlib1component15 from './lib4childlib1component15';

describe('Lib4childlib1component15', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib4childlib1component15 />);
    expect(baseElement).toBeTruthy();
  });
});
