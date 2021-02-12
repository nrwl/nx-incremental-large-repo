import React from 'react';
import { render } from '@testing-library/react';

import Lib2childlib4component16 from './lib2childlib4component16';

describe('Lib2childlib4component16', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib2childlib4component16 />);
    expect(baseElement).toBeTruthy();
  });
});
