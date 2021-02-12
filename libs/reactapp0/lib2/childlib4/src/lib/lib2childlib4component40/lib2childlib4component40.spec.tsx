import React from 'react';
import { render } from '@testing-library/react';

import Lib2childlib4component40 from './lib2childlib4component40';

describe('Lib2childlib4component40', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib2childlib4component40 />);
    expect(baseElement).toBeTruthy();
  });
});
