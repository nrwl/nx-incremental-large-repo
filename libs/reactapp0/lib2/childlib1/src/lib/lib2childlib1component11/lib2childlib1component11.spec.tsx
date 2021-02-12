import React from 'react';
import { render } from '@testing-library/react';

import Lib2childlib1component11 from './lib2childlib1component11';

describe('Lib2childlib1component11', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib2childlib1component11 />);
    expect(baseElement).toBeTruthy();
  });
});
