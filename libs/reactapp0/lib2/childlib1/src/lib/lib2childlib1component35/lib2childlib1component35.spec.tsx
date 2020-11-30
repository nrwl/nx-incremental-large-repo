import React from 'react';
import { render } from '@testing-library/react';

import Lib2childlib1component35 from './lib2childlib1component35';

describe('Lib2childlib1component35', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib2childlib1component35 />);
    expect(baseElement).toBeTruthy();
  });
});
