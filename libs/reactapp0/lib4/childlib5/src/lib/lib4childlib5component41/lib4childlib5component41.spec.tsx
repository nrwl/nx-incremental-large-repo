import React from 'react';
import { render } from '@testing-library/react';

import Lib4childlib5component41 from './lib4childlib5component41';

describe('Lib4childlib5component41', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib4childlib5component41 />);
    expect(baseElement).toBeTruthy();
  });
});
