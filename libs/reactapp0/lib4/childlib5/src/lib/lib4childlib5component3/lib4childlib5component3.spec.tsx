import React from 'react';
import { render } from '@testing-library/react';

import Lib4childlib5component3 from './lib4childlib5component3';

describe('Lib4childlib5component3', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib4childlib5component3 />);
    expect(baseElement).toBeTruthy();
  });
});
