import React from 'react';
import { render } from '@testing-library/react';

import Lib4childlib9component17 from './lib4childlib9component17';

describe('Lib4childlib9component17', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib4childlib9component17 />);
    expect(baseElement).toBeTruthy();
  });
});
