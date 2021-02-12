import React from 'react';
import { render } from '@testing-library/react';

import Lib2childlib4component31 from './lib2childlib4component31';

describe('Lib2childlib4component31', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib2childlib4component31 />);
    expect(baseElement).toBeTruthy();
  });
});
