import React from 'react';
import { render } from '@testing-library/react';

import Lib2childlib8component23 from './lib2childlib8component23';

describe('Lib2childlib8component23', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib2childlib8component23 />);
    expect(baseElement).toBeTruthy();
  });
});
