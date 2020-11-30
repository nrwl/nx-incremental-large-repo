import React from 'react';
import { render } from '@testing-library/react';

import Lib4childlib9component15 from './lib4childlib9component15';

describe('Lib4childlib9component15', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib4childlib9component15 />);
    expect(baseElement).toBeTruthy();
  });
});
