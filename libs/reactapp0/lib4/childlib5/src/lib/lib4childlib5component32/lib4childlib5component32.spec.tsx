import React from 'react';
import { render } from '@testing-library/react';

import Lib4childlib5component32 from './lib4childlib5component32';

describe('Lib4childlib5component32', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib4childlib5component32 />);
    expect(baseElement).toBeTruthy();
  });
});
