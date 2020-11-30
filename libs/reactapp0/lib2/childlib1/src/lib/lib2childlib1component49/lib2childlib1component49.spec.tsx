import React from 'react';
import { render } from '@testing-library/react';

import Lib2childlib1component49 from './lib2childlib1component49';

describe('Lib2childlib1component49', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib2childlib1component49 />);
    expect(baseElement).toBeTruthy();
  });
});
