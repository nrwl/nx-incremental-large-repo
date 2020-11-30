import React from 'react';
import { render } from '@testing-library/react';

import Lib4childlib1component28 from './lib4childlib1component28';

describe('Lib4childlib1component28', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib4childlib1component28 />);
    expect(baseElement).toBeTruthy();
  });
});
