import React from 'react';
import { render } from '@testing-library/react';

import Lib3childlib8component11 from './lib3childlib8component11';

describe('Lib3childlib8component11', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib3childlib8component11 />);
    expect(baseElement).toBeTruthy();
  });
});
