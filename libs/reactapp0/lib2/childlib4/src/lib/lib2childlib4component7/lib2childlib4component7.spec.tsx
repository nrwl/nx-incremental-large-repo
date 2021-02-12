import React from 'react';
import { render } from '@testing-library/react';

import Lib2childlib4component7 from './lib2childlib4component7';

describe('Lib2childlib4component7', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib2childlib4component7 />);
    expect(baseElement).toBeTruthy();
  });
});
