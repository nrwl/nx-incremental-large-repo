import React from 'react';
import { render } from '@testing-library/react';

import Lib4childlib4component32 from './lib4childlib4component32';

describe('Lib4childlib4component32', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib4childlib4component32 />);
    expect(baseElement).toBeTruthy();
  });
});
