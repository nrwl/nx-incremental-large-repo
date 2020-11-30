import React from 'react';
import { render } from '@testing-library/react';

import Lib2childlib8component13 from './lib2childlib8component13';

describe('Lib2childlib8component13', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib2childlib8component13 />);
    expect(baseElement).toBeTruthy();
  });
});
