import React from 'react';
import { render } from '@testing-library/react';

import Lib4childlib4component17 from './lib4childlib4component17';

describe('Lib4childlib4component17', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib4childlib4component17 />);
    expect(baseElement).toBeTruthy();
  });
});
