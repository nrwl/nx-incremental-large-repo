import React from 'react';
import { render } from '@testing-library/react';

import Lib4childlib2component20 from './lib4childlib2component20';

describe('Lib4childlib2component20', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib4childlib2component20 />);
    expect(baseElement).toBeTruthy();
  });
});
