import React from 'react';
import { render } from '@testing-library/react';

import Lib2childlib4component13 from './lib2childlib4component13';

describe('Lib2childlib4component13', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib2childlib4component13 />);
    expect(baseElement).toBeTruthy();
  });
});
