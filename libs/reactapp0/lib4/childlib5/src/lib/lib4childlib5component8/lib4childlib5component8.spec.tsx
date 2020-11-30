import React from 'react';
import { render } from '@testing-library/react';

import Lib4childlib5component8 from './lib4childlib5component8';

describe('Lib4childlib5component8', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib4childlib5component8 />);
    expect(baseElement).toBeTruthy();
  });
});
