import React from 'react';
import { render } from '@testing-library/react';

import Lib4childlib4component20 from './lib4childlib4component20';

describe('Lib4childlib4component20', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib4childlib4component20 />);
    expect(baseElement).toBeTruthy();
  });
});
