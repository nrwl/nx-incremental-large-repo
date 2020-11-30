import React from 'react';
import { render } from '@testing-library/react';

import Lib1childlib8component16 from './lib1childlib8component16';

describe('Lib1childlib8component16', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib1childlib8component16 />);
    expect(baseElement).toBeTruthy();
  });
});
