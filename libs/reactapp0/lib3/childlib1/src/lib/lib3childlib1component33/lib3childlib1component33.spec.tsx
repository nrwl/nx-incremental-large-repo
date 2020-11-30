import React from 'react';
import { render } from '@testing-library/react';

import Lib3childlib1component33 from './lib3childlib1component33';

describe('Lib3childlib1component33', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib3childlib1component33 />);
    expect(baseElement).toBeTruthy();
  });
});
