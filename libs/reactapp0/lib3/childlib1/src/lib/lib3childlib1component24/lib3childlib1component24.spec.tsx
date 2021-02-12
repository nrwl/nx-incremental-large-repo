import React from 'react';
import { render } from '@testing-library/react';

import Lib3childlib1component24 from './lib3childlib1component24';

describe('Lib3childlib1component24', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib3childlib1component24 />);
    expect(baseElement).toBeTruthy();
  });
});
