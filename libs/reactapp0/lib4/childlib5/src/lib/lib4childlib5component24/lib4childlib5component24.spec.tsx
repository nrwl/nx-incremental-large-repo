import React from 'react';
import { render } from '@testing-library/react';

import Lib4childlib5component24 from './lib4childlib5component24';

describe('Lib4childlib5component24', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib4childlib5component24 />);
    expect(baseElement).toBeTruthy();
  });
});
