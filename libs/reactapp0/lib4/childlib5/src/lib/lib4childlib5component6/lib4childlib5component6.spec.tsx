import React from 'react';
import { render } from '@testing-library/react';

import Lib4childlib5component6 from './lib4childlib5component6';

describe('Lib4childlib5component6', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib4childlib5component6 />);
    expect(baseElement).toBeTruthy();
  });
});
