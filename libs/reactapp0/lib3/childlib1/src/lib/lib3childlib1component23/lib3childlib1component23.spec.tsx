import React from 'react';
import { render } from '@testing-library/react';

import Lib3childlib1component23 from './lib3childlib1component23';

describe('Lib3childlib1component23', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib3childlib1component23 />);
    expect(baseElement).toBeTruthy();
  });
});
