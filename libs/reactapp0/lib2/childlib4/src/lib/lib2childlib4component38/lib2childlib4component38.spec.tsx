import React from 'react';
import { render } from '@testing-library/react';

import Lib2childlib4component38 from './lib2childlib4component38';

describe('Lib2childlib4component38', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib2childlib4component38 />);
    expect(baseElement).toBeTruthy();
  });
});
