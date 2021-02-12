import React from 'react';
import { render } from '@testing-library/react';

import Lib4childlib4component16 from './lib4childlib4component16';

describe('Lib4childlib4component16', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib4childlib4component16 />);
    expect(baseElement).toBeTruthy();
  });
});
