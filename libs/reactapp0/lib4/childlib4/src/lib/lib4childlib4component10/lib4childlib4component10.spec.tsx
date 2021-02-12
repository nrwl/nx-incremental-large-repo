import React from 'react';
import { render } from '@testing-library/react';

import Lib4childlib4component10 from './lib4childlib4component10';

describe('Lib4childlib4component10', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib4childlib4component10 />);
    expect(baseElement).toBeTruthy();
  });
});
