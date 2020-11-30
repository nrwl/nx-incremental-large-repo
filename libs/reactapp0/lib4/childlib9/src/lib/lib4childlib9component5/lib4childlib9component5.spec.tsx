import React from 'react';
import { render } from '@testing-library/react';

import Lib4childlib9component5 from './lib4childlib9component5';

describe('Lib4childlib9component5', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib4childlib9component5 />);
    expect(baseElement).toBeTruthy();
  });
});
