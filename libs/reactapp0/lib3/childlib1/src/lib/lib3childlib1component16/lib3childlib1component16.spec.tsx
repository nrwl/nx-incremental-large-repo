import React from 'react';
import { render } from '@testing-library/react';

import Lib3childlib1component16 from './lib3childlib1component16';

describe('Lib3childlib1component16', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib3childlib1component16 />);
    expect(baseElement).toBeTruthy();
  });
});
