import React from 'react';
import { render } from '@testing-library/react';

import Lib4childlib9component13 from './lib4childlib9component13';

describe('Lib4childlib9component13', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib4childlib9component13 />);
    expect(baseElement).toBeTruthy();
  });
});
