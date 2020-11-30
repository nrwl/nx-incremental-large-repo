import React from 'react';
import { render } from '@testing-library/react';

import Lib3childlib8component13 from './lib3childlib8component13';

describe('Lib3childlib8component13', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib3childlib8component13 />);
    expect(baseElement).toBeTruthy();
  });
});
