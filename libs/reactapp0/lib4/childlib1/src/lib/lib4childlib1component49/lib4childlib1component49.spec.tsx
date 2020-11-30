import React from 'react';
import { render } from '@testing-library/react';

import Lib4childlib1component49 from './lib4childlib1component49';

describe('Lib4childlib1component49', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib4childlib1component49 />);
    expect(baseElement).toBeTruthy();
  });
});
