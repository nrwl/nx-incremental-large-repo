import React from 'react';
import { render } from '@testing-library/react';

import Lib2childlib4component20 from './lib2childlib4component20';

describe('Lib2childlib4component20', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib2childlib4component20 />);
    expect(baseElement).toBeTruthy();
  });
});
