import React from 'react';
import { render } from '@testing-library/react';

import Lib2childlib4component6 from './lib2childlib4component6';

describe('Lib2childlib4component6', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib2childlib4component6 />);
    expect(baseElement).toBeTruthy();
  });
});
