import React from 'react';
import { render } from '@testing-library/react';

import Lib3childlib8component24 from './lib3childlib8component24';

describe('Lib3childlib8component24', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib3childlib8component24 />);
    expect(baseElement).toBeTruthy();
  });
});
