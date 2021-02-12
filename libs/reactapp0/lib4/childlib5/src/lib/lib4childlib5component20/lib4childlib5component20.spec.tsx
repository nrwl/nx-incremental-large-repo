import React from 'react';
import { render } from '@testing-library/react';

import Lib4childlib5component20 from './lib4childlib5component20';

describe('Lib4childlib5component20', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib4childlib5component20 />);
    expect(baseElement).toBeTruthy();
  });
});
