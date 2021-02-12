import React from 'react';
import { render } from '@testing-library/react';

import Lib2childlib8component41 from './lib2childlib8component41';

describe('Lib2childlib8component41', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib2childlib8component41 />);
    expect(baseElement).toBeTruthy();
  });
});
