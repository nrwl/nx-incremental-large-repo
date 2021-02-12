import React from 'react';
import { render } from '@testing-library/react';

import Lib2childlib4component45 from './lib2childlib4component45';

describe('Lib2childlib4component45', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib2childlib4component45 />);
    expect(baseElement).toBeTruthy();
  });
});
