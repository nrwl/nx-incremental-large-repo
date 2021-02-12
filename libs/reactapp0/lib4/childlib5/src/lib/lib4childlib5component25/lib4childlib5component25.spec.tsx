import React from 'react';
import { render } from '@testing-library/react';

import Lib4childlib5component25 from './lib4childlib5component25';

describe('Lib4childlib5component25', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib4childlib5component25 />);
    expect(baseElement).toBeTruthy();
  });
});
