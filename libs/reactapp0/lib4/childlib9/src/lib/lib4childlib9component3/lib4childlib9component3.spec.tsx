import React from 'react';
import { render } from '@testing-library/react';

import Lib4childlib9component3 from './lib4childlib9component3';

describe('Lib4childlib9component3', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib4childlib9component3 />);
    expect(baseElement).toBeTruthy();
  });
});
