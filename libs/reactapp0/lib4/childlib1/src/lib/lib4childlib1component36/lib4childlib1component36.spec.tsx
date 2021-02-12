import React from 'react';
import { render } from '@testing-library/react';

import Lib4childlib1component36 from './lib4childlib1component36';

describe('Lib4childlib1component36', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib4childlib1component36 />);
    expect(baseElement).toBeTruthy();
  });
});
