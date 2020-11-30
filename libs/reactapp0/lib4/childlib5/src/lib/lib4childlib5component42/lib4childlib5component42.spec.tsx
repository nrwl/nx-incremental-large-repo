import React from 'react';
import { render } from '@testing-library/react';

import Lib4childlib5component42 from './lib4childlib5component42';

describe('Lib4childlib5component42', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib4childlib5component42 />);
    expect(baseElement).toBeTruthy();
  });
});
