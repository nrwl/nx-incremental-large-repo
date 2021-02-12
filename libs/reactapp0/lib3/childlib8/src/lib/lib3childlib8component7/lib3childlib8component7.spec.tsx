import React from 'react';
import { render } from '@testing-library/react';

import Lib3childlib8component7 from './lib3childlib8component7';

describe('Lib3childlib8component7', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib3childlib8component7 />);
    expect(baseElement).toBeTruthy();
  });
});
