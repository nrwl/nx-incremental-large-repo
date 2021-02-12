import React from 'react';
import { render } from '@testing-library/react';

import Lib4childlib9component1 from './lib4childlib9component1';

describe('Lib4childlib9component1', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib4childlib9component1 />);
    expect(baseElement).toBeTruthy();
  });
});
