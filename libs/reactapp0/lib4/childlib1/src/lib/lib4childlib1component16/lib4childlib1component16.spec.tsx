import React from 'react';
import { render } from '@testing-library/react';

import Lib4childlib1component16 from './lib4childlib1component16';

describe('Lib4childlib1component16', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib4childlib1component16 />);
    expect(baseElement).toBeTruthy();
  });
});
