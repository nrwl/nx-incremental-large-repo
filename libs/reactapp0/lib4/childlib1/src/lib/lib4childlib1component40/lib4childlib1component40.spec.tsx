import React from 'react';
import { render } from '@testing-library/react';

import Lib4childlib1component40 from './lib4childlib1component40';

describe('Lib4childlib1component40', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib4childlib1component40 />);
    expect(baseElement).toBeTruthy();
  });
});
