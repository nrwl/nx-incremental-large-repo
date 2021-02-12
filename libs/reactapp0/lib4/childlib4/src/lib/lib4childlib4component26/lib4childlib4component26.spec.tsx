import React from 'react';
import { render } from '@testing-library/react';

import Lib4childlib4component26 from './lib4childlib4component26';

describe('Lib4childlib4component26', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib4childlib4component26 />);
    expect(baseElement).toBeTruthy();
  });
});
