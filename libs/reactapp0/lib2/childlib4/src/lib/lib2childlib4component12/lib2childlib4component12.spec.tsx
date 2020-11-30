import React from 'react';
import { render } from '@testing-library/react';

import Lib2childlib4component12 from './lib2childlib4component12';

describe('Lib2childlib4component12', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib2childlib4component12 />);
    expect(baseElement).toBeTruthy();
  });
});
