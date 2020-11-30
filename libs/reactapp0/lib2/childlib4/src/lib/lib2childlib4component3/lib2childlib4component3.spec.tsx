import React from 'react';
import { render } from '@testing-library/react';

import Lib2childlib4component3 from './lib2childlib4component3';

describe('Lib2childlib4component3', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib2childlib4component3 />);
    expect(baseElement).toBeTruthy();
  });
});
