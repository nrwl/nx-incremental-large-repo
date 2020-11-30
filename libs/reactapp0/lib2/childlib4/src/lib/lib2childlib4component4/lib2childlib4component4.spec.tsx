import React from 'react';
import { render } from '@testing-library/react';

import Lib2childlib4component4 from './lib2childlib4component4';

describe('Lib2childlib4component4', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib2childlib4component4 />);
    expect(baseElement).toBeTruthy();
  });
});
