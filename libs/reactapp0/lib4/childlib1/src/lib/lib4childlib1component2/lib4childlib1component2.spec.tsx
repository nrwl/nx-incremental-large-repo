import React from 'react';
import { render } from '@testing-library/react';

import Lib4childlib1component2 from './lib4childlib1component2';

describe('Lib4childlib1component2', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib4childlib1component2 />);
    expect(baseElement).toBeTruthy();
  });
});
