import React from 'react';
import { render } from '@testing-library/react';

import Lib2childlib4component21 from './lib2childlib4component21';

describe('Lib2childlib4component21', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib2childlib4component21 />);
    expect(baseElement).toBeTruthy();
  });
});
