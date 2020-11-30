import React from 'react';
import { render } from '@testing-library/react';

import Lib2childlib1component40 from './lib2childlib1component40';

describe('Lib2childlib1component40', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib2childlib1component40 />);
    expect(baseElement).toBeTruthy();
  });
});
