import React from 'react';
import { render } from '@testing-library/react';

import Lib2childlib4component43 from './lib2childlib4component43';

describe('Lib2childlib4component43', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib2childlib4component43 />);
    expect(baseElement).toBeTruthy();
  });
});
