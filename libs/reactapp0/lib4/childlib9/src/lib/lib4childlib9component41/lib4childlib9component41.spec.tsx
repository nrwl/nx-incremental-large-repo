import React from 'react';
import { render } from '@testing-library/react';

import Lib4childlib9component41 from './lib4childlib9component41';

describe('Lib4childlib9component41', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib4childlib9component41 />);
    expect(baseElement).toBeTruthy();
  });
});
