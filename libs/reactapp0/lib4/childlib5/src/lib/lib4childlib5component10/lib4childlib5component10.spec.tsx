import React from 'react';
import { render } from '@testing-library/react';

import Lib4childlib5component10 from './lib4childlib5component10';

describe('Lib4childlib5component10', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib4childlib5component10 />);
    expect(baseElement).toBeTruthy();
  });
});
