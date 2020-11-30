import React from 'react';
import { render } from '@testing-library/react';

import Lib4childlib5component43 from './lib4childlib5component43';

describe('Lib4childlib5component43', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib4childlib5component43 />);
    expect(baseElement).toBeTruthy();
  });
});
