import React from 'react';
import { render } from '@testing-library/react';

import Lib2childlib8component7 from './lib2childlib8component7';

describe('Lib2childlib8component7', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib2childlib8component7 />);
    expect(baseElement).toBeTruthy();
  });
});
