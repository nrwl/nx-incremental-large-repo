import React from 'react';
import { render } from '@testing-library/react';

import Lib4childlib1component25 from './lib4childlib1component25';

describe('Lib4childlib1component25', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib4childlib1component25 />);
    expect(baseElement).toBeTruthy();
  });
});
