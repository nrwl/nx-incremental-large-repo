import React from 'react';
import { render } from '@testing-library/react';

import Lib4childlib1component12 from './lib4childlib1component12';

describe('Lib4childlib1component12', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib4childlib1component12 />);
    expect(baseElement).toBeTruthy();
  });
});
