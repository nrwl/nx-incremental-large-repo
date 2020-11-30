import React from 'react';
import { render } from '@testing-library/react';

import Lib2childlib1component24 from './lib2childlib1component24';

describe('Lib2childlib1component24', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib2childlib1component24 />);
    expect(baseElement).toBeTruthy();
  });
});
