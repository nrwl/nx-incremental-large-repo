import React from 'react';
import { render } from '@testing-library/react';

import Lib2childlib1component38 from './lib2childlib1component38';

describe('Lib2childlib1component38', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib2childlib1component38 />);
    expect(baseElement).toBeTruthy();
  });
});
