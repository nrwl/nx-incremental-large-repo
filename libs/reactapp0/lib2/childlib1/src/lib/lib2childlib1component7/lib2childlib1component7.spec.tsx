import React from 'react';
import { render } from '@testing-library/react';

import Lib2childlib1component7 from './lib2childlib1component7';

describe('Lib2childlib1component7', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib2childlib1component7 />);
    expect(baseElement).toBeTruthy();
  });
});
