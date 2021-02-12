import React from 'react';
import { render } from '@testing-library/react';

import Lib4childlib1component48 from './lib4childlib1component48';

describe('Lib4childlib1component48', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib4childlib1component48 />);
    expect(baseElement).toBeTruthy();
  });
});
