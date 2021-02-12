import React from 'react';
import { render } from '@testing-library/react';

import Lib3childlib1component14 from './lib3childlib1component14';

describe('Lib3childlib1component14', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib3childlib1component14 />);
    expect(baseElement).toBeTruthy();
  });
});
