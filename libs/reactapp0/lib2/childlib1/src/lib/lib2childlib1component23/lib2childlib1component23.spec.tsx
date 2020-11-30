import React from 'react';
import { render } from '@testing-library/react';

import Lib2childlib1component23 from './lib2childlib1component23';

describe('Lib2childlib1component23', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib2childlib1component23 />);
    expect(baseElement).toBeTruthy();
  });
});
