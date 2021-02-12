import React from 'react';
import { render } from '@testing-library/react';

import Lib4childlib9component2 from './lib4childlib9component2';

describe('Lib4childlib9component2', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib4childlib9component2 />);
    expect(baseElement).toBeTruthy();
  });
});
