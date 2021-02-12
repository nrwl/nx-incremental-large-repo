import React from 'react';
import { render } from '@testing-library/react';

import Lib2childlib1component13 from './lib2childlib1component13';

describe('Lib2childlib1component13', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib2childlib1component13 />);
    expect(baseElement).toBeTruthy();
  });
});
