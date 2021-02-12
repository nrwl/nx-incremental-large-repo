import React from 'react';
import { render } from '@testing-library/react';

import Lib4childlib5component5 from './lib4childlib5component5';

describe('Lib4childlib5component5', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib4childlib5component5 />);
    expect(baseElement).toBeTruthy();
  });
});
