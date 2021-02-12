import React from 'react';
import { render } from '@testing-library/react';

import Lib4childlib9component24 from './lib4childlib9component24';

describe('Lib4childlib9component24', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib4childlib9component24 />);
    expect(baseElement).toBeTruthy();
  });
});
