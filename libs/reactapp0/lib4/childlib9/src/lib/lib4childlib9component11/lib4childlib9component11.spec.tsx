import React from 'react';
import { render } from '@testing-library/react';

import Lib4childlib9component11 from './lib4childlib9component11';

describe('Lib4childlib9component11', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib4childlib9component11 />);
    expect(baseElement).toBeTruthy();
  });
});
