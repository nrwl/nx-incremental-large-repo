import React from 'react';
import { render } from '@testing-library/react';

import Lib4childlib1component31 from './lib4childlib1component31';

describe('Lib4childlib1component31', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib4childlib1component31 />);
    expect(baseElement).toBeTruthy();
  });
});
