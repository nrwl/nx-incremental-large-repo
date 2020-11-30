import React from 'react';
import { render } from '@testing-library/react';

import Lib2childlib4component19 from './lib2childlib4component19';

describe('Lib2childlib4component19', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib2childlib4component19 />);
    expect(baseElement).toBeTruthy();
  });
});
