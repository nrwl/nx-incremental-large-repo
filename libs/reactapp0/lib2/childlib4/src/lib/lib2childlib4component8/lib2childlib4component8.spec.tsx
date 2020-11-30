import React from 'react';
import { render } from '@testing-library/react';

import Lib2childlib4component8 from './lib2childlib4component8';

describe('Lib2childlib4component8', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib2childlib4component8 />);
    expect(baseElement).toBeTruthy();
  });
});
