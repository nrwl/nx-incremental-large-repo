import React from 'react';
import { render } from '@testing-library/react';

import Lib4childlib1component20 from './lib4childlib1component20';

describe('Lib4childlib1component20', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib4childlib1component20 />);
    expect(baseElement).toBeTruthy();
  });
});
