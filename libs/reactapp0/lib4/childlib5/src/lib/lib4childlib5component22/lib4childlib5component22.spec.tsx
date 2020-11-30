import React from 'react';
import { render } from '@testing-library/react';

import Lib4childlib5component22 from './lib4childlib5component22';

describe('Lib4childlib5component22', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib4childlib5component22 />);
    expect(baseElement).toBeTruthy();
  });
});
