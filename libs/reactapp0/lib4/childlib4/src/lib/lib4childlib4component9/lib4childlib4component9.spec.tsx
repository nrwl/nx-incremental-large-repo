import React from 'react';
import { render } from '@testing-library/react';

import Lib4childlib4component9 from './lib4childlib4component9';

describe('Lib4childlib4component9', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib4childlib4component9 />);
    expect(baseElement).toBeTruthy();
  });
});
