import React from 'react';
import { render } from '@testing-library/react';

import Lib4childlib1component39 from './lib4childlib1component39';

describe('Lib4childlib1component39', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib4childlib1component39 />);
    expect(baseElement).toBeTruthy();
  });
});
