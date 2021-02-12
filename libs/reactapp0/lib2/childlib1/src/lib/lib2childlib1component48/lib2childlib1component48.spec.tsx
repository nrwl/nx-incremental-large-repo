import React from 'react';
import { render } from '@testing-library/react';

import Lib2childlib1component48 from './lib2childlib1component48';

describe('Lib2childlib1component48', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib2childlib1component48 />);
    expect(baseElement).toBeTruthy();
  });
});
