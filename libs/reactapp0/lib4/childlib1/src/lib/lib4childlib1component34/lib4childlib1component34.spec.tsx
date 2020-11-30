import React from 'react';
import { render } from '@testing-library/react';

import Lib4childlib1component34 from './lib4childlib1component34';

describe('Lib4childlib1component34', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib4childlib1component34 />);
    expect(baseElement).toBeTruthy();
  });
});
