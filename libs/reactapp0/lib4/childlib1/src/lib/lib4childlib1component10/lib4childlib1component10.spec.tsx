import React from 'react';
import { render } from '@testing-library/react';

import Lib4childlib1component10 from './lib4childlib1component10';

describe('Lib4childlib1component10', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib4childlib1component10 />);
    expect(baseElement).toBeTruthy();
  });
});
