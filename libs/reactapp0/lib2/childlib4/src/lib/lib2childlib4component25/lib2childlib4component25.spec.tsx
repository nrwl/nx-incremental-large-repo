import React from 'react';
import { render } from '@testing-library/react';

import Lib2childlib4component25 from './lib2childlib4component25';

describe('Lib2childlib4component25', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib2childlib4component25 />);
    expect(baseElement).toBeTruthy();
  });
});
