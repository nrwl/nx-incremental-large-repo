import React from 'react';
import { render } from '@testing-library/react';

import Lib4childlib9component12 from './lib4childlib9component12';

describe('Lib4childlib9component12', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib4childlib9component12 />);
    expect(baseElement).toBeTruthy();
  });
});
