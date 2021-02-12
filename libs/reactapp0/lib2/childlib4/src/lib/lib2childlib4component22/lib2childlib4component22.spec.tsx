import React from 'react';
import { render } from '@testing-library/react';

import Lib2childlib4component22 from './lib2childlib4component22';

describe('Lib2childlib4component22', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib2childlib4component22 />);
    expect(baseElement).toBeTruthy();
  });
});
