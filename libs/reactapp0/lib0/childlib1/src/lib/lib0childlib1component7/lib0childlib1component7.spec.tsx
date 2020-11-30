import React from 'react';
import { render } from '@testing-library/react';

import Lib0childlib1component7 from './lib0childlib1component7';

describe('Lib0childlib1component7', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib0childlib1component7 />);
    expect(baseElement).toBeTruthy();
  });
});
