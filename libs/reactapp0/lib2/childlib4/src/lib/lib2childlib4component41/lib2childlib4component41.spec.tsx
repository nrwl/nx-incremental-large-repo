import React from 'react';
import { render } from '@testing-library/react';

import Lib2childlib4component41 from './lib2childlib4component41';

describe('Lib2childlib4component41', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib2childlib4component41 />);
    expect(baseElement).toBeTruthy();
  });
});
