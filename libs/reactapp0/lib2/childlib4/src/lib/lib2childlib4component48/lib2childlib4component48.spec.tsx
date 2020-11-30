import React from 'react';
import { render } from '@testing-library/react';

import Lib2childlib4component48 from './lib2childlib4component48';

describe('Lib2childlib4component48', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib2childlib4component48 />);
    expect(baseElement).toBeTruthy();
  });
});
